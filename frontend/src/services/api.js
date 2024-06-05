import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000' // Adjust the baseURL according to your backend server URL
});

export const createUser = (userData) => api.post('/users', userData);
export const getUsers = () => api.get('/users');

export default api;
