import axios from './axios';

export const verifyTokenRequest = () => axios.get('/api/auth/verify');
export const registerRequest = (user) => axios.post(`/api/auth/register`, user);
export const loginRequest = (user) => axios.post('/api/auth/login', user);