import { createSlice } from '@reduxjs/toolkit';
import { MarketInfo, Predict } from '~models/write.model';

export interface WriteState {
  title: string;
  market: MarketInfo;
  predict: Predict;
  target: number;
  content: string;
}

const initialState: WriteState = {
  title: '',
  market: MarketInfo.KRW,
  predict: Predict.UP,
  target: 0,
  content: '',
};

const writeReducer = createSlice({
  name: 'write',
  initialState,
  reducers: {
    changeTitle(state, action) {
      return { ...state, title: action.payload };
    },
    changeMarket(state, action) {
      return { ...state, market: action.payload };
    },
    changePredict(state, action) {
      return { ...state, predict: action.payload };
    },
    changeTarget(state, action) {
      return { ...state, predict: action.payload };
    },
    changeContent(state, action) {
      return { ...state, content: action.payload };
    },
  },
});

export const {
  changeTitle,
  changeMarket,
  changePredict,
  changeTarget,
  changeContent,
} = writeReducer.actions;

export default writeReducer.reducer;
