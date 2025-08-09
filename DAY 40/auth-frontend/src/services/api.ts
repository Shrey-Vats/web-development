import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + '/auth',
  withCredentials: true, // required for cookies/session to persist
});

export default api;
