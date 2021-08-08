import { api } from './index';

export const getPost = () => {
  return api.get('/post.json');
};

export const createPost = (data: any) => {
  return api.post('/post.json', data);
};
