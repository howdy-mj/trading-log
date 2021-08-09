import { RootState } from '~store/rootReducer';
import { createSelector } from 'reselect';

const selectAuthState = (state: RootState) => state.auth;

export const selectUid = createSelector(selectAuthState, ({ uid }) => uid);

export const selectRefreshToken = createSelector(
  selectAuthState,
  ({ refreshToken }) => refreshToken,
);

export const selectFirebaseToken = createSelector(
  selectAuthState,
  ({ fbIdToken }) => fbIdToken,
);
