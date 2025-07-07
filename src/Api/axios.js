import axios from 'axios';

const BASE_URL = 'http://68.183.28.116/api/';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
