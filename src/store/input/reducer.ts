import { createSlice } from '@reduxjs/toolkit';

export interface InputState {
  value: string;
}

const initialState: InputState = {
  value: '',
};

const inputReducer = createSlice({
  name: 'input',
  initialState,
  reducers: {
    updateInputValue(state, action) {
      return { ...state, value: action.payload };
    },
  },
});

export const { updateInputValue } = inputReducer.actions;

export default inputReducer.reducer;
