import { createContext, useContext, useState, useEffect } from "react";
import { createProduct as createProductAPI, getCategories as getCategoriesAPI } from "../api/products";

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
    try {
      const res = await createProductAPI(product);
      setProducts([...products, res.data]);
      console.log(res);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }

  return (
    <ProductContext.Provider value={{ products, categories, createProduct }}>
      {children}
    </ProductContext.Provider>
  );
}