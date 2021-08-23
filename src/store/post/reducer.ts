import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getPost } from '~api/post';
import { Post, PostWithId } from '~models/post.model';

export interface PostsState {
  postList: PostWithId[];
  currentPost: PostWithId | null;
}

const initialState: PostsState = {
  postList: [],
  currentPost: null,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ uid, idToken }: { uid: string; idToken: string }) => {
    const response = await getPost(uid, idToken);
    const values: Post[] = Object.values(response.data);
    const keys = Object.keys(response.data);

    const result: PostWithId[] = values.map((value: Post, idx: number) => {
      return {
        id: keys[idx],
        title: value.title,
        market: value.market,
        predict: value.predict,
        target: value.target,
        description: value.description,
        createdAt: value.createdAt,
      };
    });

    return result;
  },
);

const postReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return { ...state, postList: action.payload };
    });
  },
});

export default postReducer.reducer;
