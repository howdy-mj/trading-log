import axios from 'axios';

import { getItem } from '~utils/storage';

const baseApi = process.env.REACT_APP_FIREBASE_DATABASE_URL;

export const api = axios.create({
  baseURL: baseApi,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = getItem('access_token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});
