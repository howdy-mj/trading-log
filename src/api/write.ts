import { api } from './index';

export const createPost = (data: any) => {
  return api.post('/post', data);
};
