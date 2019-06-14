import axios from 'axios';

export const backend = axios.create({
  baseURL: 'http://192.168.0.1:3333',
});

backend.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      return Promise.reject(error.response.data);
    } else if (error.request) {
      return Promise.reject(error.request);
    } else {
      return Promise.reject(error);
    }
  },
);
