import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  uid: string;
  refreshToken: string;
  fbIdToken: string;
}

const initialState: AuthState = {
  uid: '',
  refreshToken: '',
  fbIdToken: '',
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUid(state, action) {
      return { ...state, uid: action.payload };
    },
    updateRefreshToken(state, action: PayloadAction<string>) {
      return { ...state, refreshToken: action.payload };
    },
    updateFirebaseIdToken(state, action) {
      return { ...state, fbIdToken: action.payload };
    },
    initUserData() {
      return initialState;
    },
  },
});

export const {
  updateUid,
  updateRefreshToken,
  updateFirebaseIdToken,
  initUserData,
} = authReducer.actions;

export default authReducer.reducer;
