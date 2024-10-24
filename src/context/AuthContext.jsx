import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/api";
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  // Verifica el token al montar el componente
  useEffect(() => {
    const verifyToken = async () => {
      const token = Cookies.get("token");

      if (!token) {
        setLoading(false);
        setIsAuthenticated(false);
        return;
      }

      try {
        const response = await verifyTokenRequest(); // Verifica el token
        setUser(response.data.user); // Establece el usuario
        setIsAuthenticated(true); // El usuario está autenticado
      } catch (error) {
        setIsAuthenticated(false); // El token no es válido
      } finally {
        setLoading(false); // Termina el proceso de carga
      }
    };

    verifyToken(); // Llama a la función para verificar el token
  }, []); // Se ejecuta una vez al montar

  // Función para iniciar sesión
  const signin = async (credentials) => {
    try {
      const response = await loginRequest(credentials);
      const { token, user } = response.data; // Asegúrate de que el token y el usuario se devuelvan aquí
      if (token && user) {
        Cookies.set("token", token, { expires: 7 }); // Establecer con expiración
        setUser(user); // Establecer el usuario
        setIsAuthenticated(true); // El usuario está autenticado
        setErrors([]); // Limpiar errores
      } else {
        setErrors(['Token or user data is missing in the response']);
      }
    } catch (error) {
      setErrors([error.response?.data?.message || error.message || 'Error desconocido']);
    }
  };

  // Función para registrar un nuevo usuario
  const signup = async (values) => {
    try {
      const response = await registerRequest({
        username: values.name,
        email: values.email,
        password: values.password,
      });

      if (response && response.data) {
        const { token, user } = response.data;
        if (token && user) {
          Cookies.set("token", token, { expires: 7 }); // Establecer con expiración
          setUser(user); // Establecer el usuario
          setIsAuthenticated(true); // El usuario está autenticado
          setErrors([]); // Limpiar errores
        } else {
          setErrors(['Token or user data is missing in the response']);
        }
      }
    } catch (error) {
      if (Array.isArray(error?.response?.data?.errors)) {
        return setErrors(error.response.data.errors);
      }
      setErrors([error?.response?.data?.message || "Unexpected error"]);
      setIsAuthenticated(false);
    }
  };

  // Función para cerrar sesión
  const signout = async () => {
    Cookies.remove("token"); // Remueve el token de las cookies
    setUser(null); // Resetea el usuario
    setIsAuthenticated(false); // El usuario no está autenticado
  };

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated, signin, signup, signout, errors }}>
      {children}
    </AuthContext.Provider>
  );
};