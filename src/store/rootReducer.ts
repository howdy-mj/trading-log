import { combineReducers } from 'redux';

import write, { WriteState } from './write/reducer';
import user, { UserState } from './user/reducer';

export type RootState = {
  write: WriteState;
  user: UserState;
};

export const rootReducer = combineReducers({
  write,
  user,
});
