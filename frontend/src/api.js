import axios from 'axios';

const API = axios.create({ baseURL: 'https://taskmaster-kobw.onrender.com' });

export const getTasks = () => API.get('/tasks');
export const addTask = (task) => API.post('/tasks', task);
export const updateTask = (id, updates) => API.put(`/tasks/${id}`, updates);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
