import { RootState } from '~store/rootReducer';
import { createSelector } from 'reselect';

const selectUserState = (state: RootState) => state.user;

export const selectUserToken = createSelector(
  selectUserState,
  ({ token }) => token,
);
