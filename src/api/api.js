import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || import.meta.env.PORT,
});

export const registerRequest = (user) => api.post('/api/auth/register', user);
export const loginRequest = (user) => api.post('/api/auth/login', user);

export default api;

// const signin = async (values) => {
//   try {
//     const response = await loginRequest({
//       email: values.email,
//       password: values.password,
//     });
//     setUser(response.data);
//     setIsAuthenticated(true);
//     setErrors([]);
//   } catch (error) {
//     if (error.response && error.response.data) {
//       const errorData = Array.isArray(error.response.data.errors) ? error.response.data.errors : [{ message: error.response.data.message }];
//       setErrors(errorData);
//     } else {
//       setErrors([{ message: 'Error desconocido' }]); // Manejar errores desconocidos
//     }
//     setIsAuthenticated(false); // Asegurarse de que el usuario no esté autenticado en caso de error
//   }
// };