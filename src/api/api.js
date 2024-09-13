import axios from 'axios';

const api = axios.create({
  BASE_URL: process.env.BASE_URL
});

export default api;