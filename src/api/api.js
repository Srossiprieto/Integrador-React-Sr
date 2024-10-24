import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;

export const loginRequest = async (credentials) => {
  return await axios.post(`${API_URL}/api/auth/login`, credentials, { withCredentials: true });
};

export const registerRequest = async (userData) => {
  return await axios.post(`${API_URL}/api/auth/register`, userData, { withCredentials: true });
};

export const verifyTokenRequest = async () => {
  return await axios.get(`${API_URL}/api/auth/verify`, { withCredentials: true });
};