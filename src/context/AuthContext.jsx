import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest, registerRequest } from "../api/api"; // Importar loginRequest y registerRequest

export const AuthContext = createContext();
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (values) => {
    try {
      const response = await registerRequest({
        username: values.name,
        email: values.email,
        password: values.password,
      });
      
      setUser(response.data); // Configurar el estado del usuario con la respuesta de la API
      setIsAuthenticated(true); // Configurar el estado de autenticación en verdadero
      setErrors([]); // Limpiar errores en caso de éxito
      
    } catch (error) {
      if(Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.errors]); 
      setIsAuthenticated(false); // Asegurarse de que el usuario no esté autenticado en caso de error
    }
  };

  const signin = async (values) => {
    try {
      const response = await loginRequest({
        email: values.email,
        password: values.password,
      });
      setUser(response.data);
      setIsAuthenticated(true);
      setErrors([]);
    } catch (error) {
      if(Array.isArray(error.response.data.errors)) {
        return setErrors(error.response.data.errors);
      }
      setErrors([error.response.data.message]); 
      setIsAuthenticated(false); // Asegurarse de que el usuario no esté autenticado en caso de error
    }
  };

  useEffect(() => {
    if(errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};