import axios from './axios';


export const loginRequest = async (credentials) => {
  return await axios.post(`/api/auth/login`, credentials, { withCredentials: true });
};

export const registerRequest = async (userData) => {
  return await axios.post(`/api/auth/register`, userData, { withCredentials: true });
};

export const verifyTokenRequest = async () => {
  return await axios.get(`/api/auth/verify`, { withCredentials: true });
};

