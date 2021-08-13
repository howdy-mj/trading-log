import { Post, PostWithId } from '~models/post.model';

import { api } from './index';

export const getPost = () => {
  return api.get('/post.json');
};

export const createPost = (data: Post) => {
  return api.post('/post.json', data);
};

export const putPost = (data: PostWithId) => {
  const id = data.id;
  return api.put(`/post/${id}.json`, data);
};

export const deletePost = (id: string) => {
  return api.delete(`/post/${id}.json`);
};
