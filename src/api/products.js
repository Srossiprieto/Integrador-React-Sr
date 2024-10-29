import axios from "./axios";

export const getProducts = () => axios.get(`/api/products`);

export const getProduct = (id) => axios.get(`/api/products/${id}`);

export const deleteProduct = (id) => axios.delete(`/api/products/${id}`);

export const updateProduct = (product) =>
  axios.put(`/api/products/${product._id}`, product);

export const createProduct = (product, token) =>
  axios.post(`/api/products`, product, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  


export const getCategories =  () =>  axios.get(`/api/categories`);
   
export const createCategory =  (name) =>  axios.post(`/api/categories`, { name });


  