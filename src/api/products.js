import axios from "./axios";
import Cookies from "js-cookie";

export const getProducts = () => axios.get(`/api/products`);

export const getProduct = (id) => axios.get(`/api/products/${id}`);

export const deleteProduct = (id) => axios.delete(`/api/products/${id}`);

export const updateProduct = (product) =>
  axios.put(`/api/products/${product._id}`, product);

const token = Cookies.get('token');
export const createProduct = (product) =>  axios.post('/api/products', product, {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  withCredentials: true // Asegura que se envíen las cookies
});

export const getCategories =  () =>  axios.get(`/api/categories`);

export const createCategory =  (name) =>  axios.post(`/api/categories`, { name });