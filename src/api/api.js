import axios from './axios';

export const loginRequest = (credentials) => axios.post('/api/auth/login', credentials);
export const registerRequest = (userData) => axios.post('/api/auth/register', userData);
export const verifyTokenRequest = () => axios.get('/api/auth/verify');
export const getProducts = () => axios.get(`/api/products`);
export const deleteProduct = (id) => axios.delete(`/api/products/${id}`);
export const updateProduct = (id, productData) => axios.put(`/api/products/${id}`, productData);
export const createProduct = (productData) => axios.post('/api/products', productData);
export const getCategories = () => axios.get('/api/categories');
export const createCategory = (name) => axios.post(`/api/categories`, { name });