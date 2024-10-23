import axios from './axios';
import Cookies from 'js-cookie'; // Asegúrate de importar js-cookie si no lo has hecho

export const registerRequest = (user) => axios.post('/api/auth/register', user);

export const loginRequest = (user) => axios.post('/api/auth/login', user);

export const verifyTokenRequest = () => {
  const token = Cookies.get("token"); // Obtener el token de las cookies
  if (!token) {
    throw new Error("No token provided");
  }

  return axios.get('/api/auth/verify', {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  });
};
