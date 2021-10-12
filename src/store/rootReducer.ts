import { combineReducers } from 'redux';

import auth, { AuthState } from './auth/reducer';
import posts, { PostsState } from './post/reducer';
import user, { UserState } from './user/reducer';
import write, { WriteState } from './write/reducer';
import alert, { AlertState } from './alert/reducer';
import postDetail, { PostDetailState } from './detail/reducer';

export type RootState = {
  /** USER */
  auth: AuthState;
  user: UserState;
  /* POST */
  posts: PostsState;
  write: WriteState;
  postDetail: PostDetailState;
  /* ETC */
  alert: AlertState;
};

export const rootReducer = combineReducers({
  /** USER */
  auth,
  user,
  /* POST */
  posts,
  write,
  postDetail,
  /* ETC */
  alert,
});
