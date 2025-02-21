import axios from 'axios';

const api = axios.create({
  baseURL: 'http://160.25.62.109:8081/api/',
  //timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;