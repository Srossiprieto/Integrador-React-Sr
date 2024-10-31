import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest, registerRequest } from "../api/api";
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

  // Función para iniciar sesión
  const signin = async (credentials) => {
    try {
      const response = await loginRequest(credentials);
      const { token, user } = response.data;
      if (token && user) {
        Cookies.set("token", token, { expires: 7 });
        setUser(user);
        setIsAuthenticated(true);
        setErrors([]);
      } else {
        setErrors(['Token o datos de usuario faltantes en la respuesta']);
      }
    } catch (error) {
      setErrors([error.response?.data?.message || error.message || 'Error desconocido']);
    }
  };

  // Función para registrarse
  const signup = async (values) => {
    try {
      const response = await registerRequest(values);
      const { token, user } = response.data;
      if (token && user) {
        Cookies.set("token", token, { expires: 7 });
        setUser(user);
        setIsAuthenticated(true);
        setErrors([]);
      } else {
        setErrors(['Token o datos de usuario faltantes en la respuesta']);
      }
    } catch (error) {
      if (Array.isArray(error?.response?.data?.errors)) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([error?.response?.data?.message || "Error inesperado"]);
      }
      setIsAuthenticated(false);
    }
  };

  // Función para cerrar sesión
  const signout = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  // Cargar usuario desde el token
  const loadUserFromToken = () => {
    const token = Cookies.get("token");
    if (token) {
      const user = JSON.parse(atob(token.split('.')[1]));
      setUser(user);
      setIsAuthenticated(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUserFromToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated, signin, signup, signout, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
