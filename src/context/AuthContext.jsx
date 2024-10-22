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
      setErrors([error?.response?.data?.message || "Unexpected error"]);
      setIsAuthenticated(false);
    }
  };

  const signin = async (values) => {
    try {
      const response = await loginRequest({
        email: values.email,
        password: values.password,
      });

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
      setErrors([error?.response?.data?.message || "Unexpected error"]);
      setIsAuthenticated(false);
    }
  };

  const checkLogin = async () => {
    const cookies = Cookies.get()

    if (!cookies.token) {
      setIsAuthenticated(false);
      setLoading(false);
      setUser(null);
      return;
    }
        try {
            const res = await verifyTokenRequest(cookies.token);
            if (!res.data) {
                setIsAuthenticated(false)
                setLoading(false);
                return;
            }else

            setIsAuthenticated(true)
            setUser(res.data)
            setLoading(false);
        } catch (error) {
            setIsAuthenticated(false)
            setUser(null)
            setLoading(false);
        }
}
      // Si hay un token, hacer la solicitud de verificación


  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    if (errors.length > 0) {
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
        loading,
        isAuthenticated,
        errors,
        checkLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
