import axios from './axios';

export const registerRequest = (user) => axios.post(`/api/auth/register`, user, { withCredentials: true });
export const loginRequest = (user) => axios.post('/api/auth/login', user, { withCredentials: true });
export const verifyTokenRequest = () => axios.get('/api/auth/verify', { withCredentials: true });