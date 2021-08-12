import { api } from './index';

export const getPost = () => {
  return api.get('/post.json');
};

export const createPost = (data: any) => {
  return api.post('/post.json', data);
};

export const amentPost = (data: any) => {
  return api.put('/post.json', data);
};

export const deletePost = (data: any) => {
  return api.delete('/post.json', data);
};
