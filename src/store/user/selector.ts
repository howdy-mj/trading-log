import { RootState } from '~store/rootReducer';
import { createSelector } from '@reduxjs/toolkit';

const selectUserState = (state: RootState) => state.user;

export const selectUserEmail = createSelector(
  selectUserState,
  ({ email }) => email,
);

export const selectUserName = createSelector(
  selectUserState,
  ({ name }) => name,
);

export const selectUserPhotoUrl = createSelector(
  selectUserState,
  ({ photoUrl }) => photoUrl,
);
