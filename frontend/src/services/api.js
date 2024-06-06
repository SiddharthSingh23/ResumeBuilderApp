import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.40:5000' // localhost or your ip address
});

export const getUsers = () => api.get('/users');
export const createUser = (userData) => api.post('/create-user', userData);
export const loginUser = (userData) => api.post('/login-user', userData)

export default api;
