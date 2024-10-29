import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;

axios.defaults.withCredentials = true; // Asegúrate de que las credenciales se envíen con cada solicitud

export const loginRequest = async (credentials) => {
  return await axios.post(`${API_URL}/api/auth/login`, credentials, { withCredentials: true });
};

export const registerRequest = async (credentials) => {
  return await axios.post(`${API_URL}/api/auth/register`, credentials, { withCredentials: true });
};

export const verifyTokenRequest = async () => {
  return await axios.get(`${API_URL}/api/auth/verify`, { withCredentials: true });
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/products`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/api/products/${id}`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(`${API_URL}/api/products/${id}`, productData, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/api/products`, productData, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error al crear el producto:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/categories`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const createCategory = async (name) => {
  try {
    const response = await axios.post(`${API_URL}/api/categories`, { name }, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error al crear la categoría:", error);
    throw error;
  }
};