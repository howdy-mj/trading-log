import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const selectInputState = (state: RootState) => state.input;

export const selectInputValue = createSelector(
  selectInputState,
  ({ value }) => value
);
