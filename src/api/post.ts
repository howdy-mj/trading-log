import { Post, PostWithId } from '~models/post.model';

import { api } from './index';

export const getPost = (uid: string, idToken: string) => {
  return api.get(`/post/${uid}.json?auth=${idToken}`);
};

export const createPost = (data: Post, uid: string, idToken: string) => {
  return api.post(`/post/${uid}.json?auth=${idToken}`, data);
};

export const putPost = (data: PostWithId, uid: string, idToken: string) => {
  const id = data.id;
  return api.put(`/post/${uid}/${id}.json?auth=${idToken}`, data);
};

export const deletePost = (id: string, uid: string, idToken: string) => {
  return api.delete(`/post/${uid}/${id}.json?auth=${idToken}`);
};
