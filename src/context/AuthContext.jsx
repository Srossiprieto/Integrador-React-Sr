import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/api";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (values) => {
    try {
      const response = await registerRequest({
        username: values.name,
        email: values.email,
        password: values.password,
      });
  
      // Verificar si la respuesta contiene datos
      if (response && response.data) {
        setUser({
          id: response.data.id,
          username: response.data.username,
          email: response.data.email,
        });
        setIsAuthenticated(true);
        setErrors([]);
      }
    } catch (error) {
      if (Array.isArray(error?.response?.data?.errors)) {
        return setErrors(error.response.data.errors);
      }
      setErrors([error?.response?.data?.message || 'Error inesperado']);
      setIsAuthenticated(false);
    }
  };
  
  const signin = async (values) => {
    try {
      const response = await loginRequest({
        email: values.email,
        password: values.password,
      });
  
      // Verificar si la respuesta contiene datos
      if (response && response.data) {
        setUser({
          id: response.data.id,
          username: response.data.username,
          email: response.data.email,
        });
        setIsAuthenticated(true);
        setErrors([]);
      }
    } catch (error) {
      if (Array.isArray(error?.response?.data?.errors)) {
        return setErrors(error.response.data.errors);
      }
      setErrors([error?.response?.data?.message || 'Error inesperado']);
      setIsAuthenticated(false);
    }
  };
  

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      try {
        const res = await verifyTokenRequest(); // La función que verifica el token en el backend
        if (res.data) {
          setUser(res.data); // Guardar los datos del usuario
          setIsAuthenticated(true); // Marcar como autenticado
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.error(error);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    checkLogin();
  }, []);
  
  

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        user,
        loading,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};