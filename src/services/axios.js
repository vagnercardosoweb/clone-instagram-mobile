import axios from 'axios';

export const backend = axios.create({
  baseURL: 'http://192.168.0.1:3333',
});
