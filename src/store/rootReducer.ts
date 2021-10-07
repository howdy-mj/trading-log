import { combineReducers } from 'redux';

import auth, { AuthState } from './auth/reducer';
import posts, { PostsState } from './post/reducer';
import user, { UserState } from './user/reducer';
import write, { WriteState } from './write/reducer';
import alert, { AlertState } from './alert/reducer';

export type RootState = {
  auth: AuthState;
  user: UserState;
  write: WriteState;
  posts: PostsState;
  alert: AlertState;
};

export const rootReducer = combineReducers({
  auth,
  user,
  write,
  posts,
  alert,
});
