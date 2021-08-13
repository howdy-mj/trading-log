import axios from 'axios';
import { googleSignOut } from '~service/firebase';

import { clearAllToken, getItem } from '~utils/storage';
import { ResponseError } from './api.model';

const baseApi = process.env.REACT_APP_FIREBASE_DATABASE_URL;

export const api = axios.create({
  baseURL: baseApi,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(responseValidate(error.response));
  },
);

const responseValidate = (error: ResponseError) => {
  if (!error) {
    alert('네트워크 오류가 존재합니다.\n재접속 해주세요.');
  }

  if (error.status === 401) {
    // TODO: refresh_token으로 재요청 방법 찾아보기
    googleSignOut();
    clearAllToken();
    // alert('토큰이 만료되었습니다. 다시 로그인을 해주세요.');
    window.location.replace('/login');
    return;
  }

  // console.log('err', error);

  return error;
};
