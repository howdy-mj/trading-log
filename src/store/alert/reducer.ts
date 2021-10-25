import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AlertState {
  visible: boolean;
}

const initialState: AlertState = {
  visible: false,
};

const alertReducer = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert(
      state,
      action: PayloadAction<{
        visible: boolean;
      }>,
    ) {
      const { visible } = action.payload;
      state.visible = visible;
    },
  },
});

export const { showAlert } = alertReducer.actions;

export default alertReducer.reducer;
