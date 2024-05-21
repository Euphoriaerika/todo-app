import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getTasks = async () => {
  return await axios.get(`${API_URL}/getTasks`);
};

export const addTask = async (task) => {
  return await axios.post(`${API_URL}/addTask`, task);
};

export const updateTask = async (id, updatedTask) => {
  return await axios.put(`${API_URL}/updateTask/${id}`, updatedTask);
};

export const deleteTask = async (id) => {
  return await axios.delete(`${API_URL}/deleteTask/${id}`);
};
