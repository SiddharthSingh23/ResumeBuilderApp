import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.40:4000', // localhost or your ip address
});

// Add a response interceptor
api.interceptors.response.use(
  response => response.data, // Only return the data
  error => Promise.reject(error),
);

export const getUsers = () => api.get('/users');
export const createUser = userData => api.post('/create-user', userData);
export const loginUser = userData => api.post('/login-user', userData);

export default api;
