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

  // Function to sign in
  const signin = async (credentials) => {
    try {
      const response = await loginRequest(credentials);
      const { token, user } = response.data; // Ensure the token and user are returned here
      if (token && user) {
        Cookies.set("token", token, { expires: 7 }); // Set with expiration
        setUser(user); // Set the user
        setIsAuthenticated(true); // The user is authenticated
        setErrors([]); // Clear errors
      } else {
        setErrors(['Token or user data is missing in the response']);
      }
    } catch (error) {
      setErrors([error.response?.data?.message || error.message || 'Unknown error']);
    }
  };

  // Function to sign up a new user
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
          Cookies.set("token", token, { expires: 7 }); // Set with expiration
          setUser(user); // Set the user
          setIsAuthenticated(true); // The user is authenticated
          setErrors([]); // Clear errors
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

  // Function to sign out
  const signout = async () => {
    Cookies.remove("token"); // Remove the token from cookies
    setUser(null); // Reset the user
    setIsAuthenticated(false); // The user is not authenticated
  };

  // Function to load user from token
  const loadUserFromToken = () => {
    const token = Cookies.get("token");
    if (token) {
      // Assuming the token contains user information
      const user = JSON.parse(atob(token.split('.')[1])); // Decode the token payload
      setUser(user);
      setIsAuthenticated(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUserFromToken(); // Load user from token when the component mounts
  }, []); // Run once on mount

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated, signin, signup, signout, errors }}>
      {children}
    </AuthContext.Provider>
  );
};