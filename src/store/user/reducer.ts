import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  token: string;
}

const initialState: UserState = {
  token: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      return { ...state, token: action.payload };
    },
  },
});

export const { updateUser } = userReducer.actions;

export default userReducer.reducer;
