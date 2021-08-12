import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const selectPostsState = (state: RootState) => state.posts;

export const selectPostList = createSelector(
  selectPostsState,
  ({ postList }) => postList,
);
