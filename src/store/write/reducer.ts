import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MarketInfo, Predict } from '~models/post.model';

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
    changeTitle(state, action: PayloadAction<string>) {
      return { ...state, title: action.payload };
    },
    changeMarket(state, action: PayloadAction<MarketInfo>) {
      return { ...state, market: action.payload };
    },
    changePredict(state, action: PayloadAction<Predict>) {
      return { ...state, predict: action.payload };
    },
    changeTarget(state, action: PayloadAction<number>) {
      return { ...state, target: action.payload };
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
