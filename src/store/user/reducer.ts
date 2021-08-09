import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  email: string;
  name: string;
  photoUrl: string;
}

const initialState: UserState = {
  email: '',
  name: '',
  photoUrl: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo(state, action) {
      const { displayName, email, photoURL } = action.payload;
      return { ...state, name: displayName, email, photoUrl: photoURL };
    },

    initUserData() {
      return initialState;
    },
  },
});

export const { updateUserInfo, initUserData } = userReducer.actions;

export default userReducer.reducer;
