import { RootState } from '../rootReducer';
import { createSelector } from '@reduxjs/toolkit';

const selectPostsState = (state: RootState) => state.posts;

export const selectPostList = createSelector(
  selectPostsState,
  ({ postList }) => postList,
);
