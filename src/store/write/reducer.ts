import { createSlice } from '@reduxjs/toolkit';
import { MarketInfo, Predict } from '~models/write.model';

export interface WriteState {
  title: string;
  market: MarketInfo;
  predict: Predict;
  target: number;
}

const initialState: WriteState = {
  title: '',
  market: MarketInfo.KRW,
  predict: Predict.UP,
  target: 0,
};

const writeReducer = createSlice({
  name: 'write',
  initialState,
  reducers: {
    updateTitle(state, action) {
      return { ...state, title: action.payload };
    },
    updateMarket(state, action) {
      return { ...state, market: action.payload };
    },
    updatePredict(state, action) {
      return { ...state, predict: action.payload };
    },
    updateTarget(state, action) {
      return { ...state, predict: action.payload };
    },
  },
});

export const { updateTitle, updateMarket, updatePredict, updateTarget } =
  writeReducer.actions;

export default writeReducer.reducer;
