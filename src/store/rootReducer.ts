import { combineReducers } from 'redux';
import input, { InputState } from './input/reducer';

export type RootState = {
  input: InputState;
};

export const rootReducer = combineReducers({
  input,
});
