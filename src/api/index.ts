import axios from 'axios';

const baseApi = process.env.REACT_APP_FIREBASE_DATABASE_URL;

export const api = axios.create({
  baseURL: baseApi,
  timeout: 100000,
});
