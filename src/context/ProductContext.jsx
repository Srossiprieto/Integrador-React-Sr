import { createContext, useContext, useState, useEffect } from "react";
import { createProduct as createProductAPI, getCategories as getCategoriesAPI } from "../api/products";
import Cookies from 'js-cookie';

const ProductContext = createContext();

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategoriesAPI();
        setCategories(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const createProduct = async (product) => {
    const token = Cookies.get("token");
    console.log("Token:", token); // Depuración: Verificar el token
    if (!token) return console.error("No token found");
    try {
      const res = await createProductAPI(product, token);
      setProducts([...products, res.data]);
      console.log(res);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }

  const loadUserFromToken = () => {
    const token = Cookies.get("token");
    if (token) {
      // Assuming the token contains user information
      const user = JSON.parse(atob(token.split('.')[1])); 
      setUser(user);
      setIsAuthenticated(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUserFromToken(); // Load user from token when the component mounts
  }, []); // Run

  return (
    <ProductContext.Provider value={{ products, categories, createProduct, isAuthenticated }}>
      {children}
    </ProductContext.Provider>
  );
}