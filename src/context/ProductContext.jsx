import { createContext, useContext, useState, useEffect } from "react";
import { createProduct as createProductAPI, getCategories as getCategoriesAPI, createCategory as createCategoryAPI, deleteCategory as deleteCategoryAPI } from "../api/api";
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
    if (!token) return console.error("No token found");
    try {
      const res = await createProductAPI(product, token);
      setProducts([...products, res.data]);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }

  const createCategory = async (category) => {
    const token = Cookies.get("token");
    if (!token) return console.error("No token found");
    try {
      const res = await createCategoryAPI(category, token);
      setCategories([...categories, res.data]);
    } catch (error) {
      console.error("Error creating category:", error);
    }
  }

  const deleteCategory = async (id) => {
    const token = Cookies.get("token");
    if (!token) return console.error("No token found");
    try {
      await deleteCategoryAPI(id, token);
      setCategories(categories.filter(category => category._id !== id));
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  }

  return (
    <ProductContext.Provider value={{ products, categories, createProduct, createCategory, deleteCategory }}>
      {children}
    </ProductContext.Provider>
  );
}