import { combineReducers } from 'redux';

import write, { WriteState } from './write/reducer';

export type RootState = {
  write: WriteState;
};

export const rootReducer = combineReducers({
  write,
});
