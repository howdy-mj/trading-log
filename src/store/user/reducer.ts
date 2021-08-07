import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  uid: string;
  token: string;
}

const initialState: UserState = {
  uid: '',
  token: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUid(state, action) {
      return { ...state, uid: action.payload };
    },
    updateToken(state, action: PayloadAction<string>) {
      return { ...state, token: action.payload };
    },
    initUserData() {
      return initialState;
    },
  },
});

export const { updateUid, updateToken, initUserData } = userReducer.actions;

export default userReducer.reducer;
