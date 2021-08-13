import { api } from './index';

export const getPost = () => {
  return api.get('/post.json');
};

export const createPost = (data: any) => {
  return api.post('/post.json', data);
};

export const putPost = (data: any) => {
  // TODO: 수정
  return api.put('/post.json', data);
};

export const deletePost = (data: any) => {
  // TODO: 수정
  return api.delete('/post.json', data);
};
