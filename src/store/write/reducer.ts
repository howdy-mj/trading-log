import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MarketInfo, Predict } from '~models/post.model';

export interface WriteState {
  id: string;
  title: string;
  market: MarketInfo;
  predict: Predict;
  target: number;
  description: string;
  createdAt: string;
}

const initialState: WriteState = {
  id: '',
  title: '',
  market: MarketInfo.KRW,
  predict: Predict.UP,
  target: 0,
  description: '',
  createdAt: '',
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
    changeDescription(state, action) {
      return { ...state, description: action.payload };
    },
    loadContent(state, action: PayloadAction<WriteState>) {
      const { id, title, market, predict, target, description, createdAt } =
        action.payload;
      return {
        ...state,
        id,
        title,
        market,
        predict,
        target,
        description,
        createdAt,
      };
    },
    initContent() {
      return initialState;
    },
  },
});

export const {
  changeTitle,
  changeMarket,
  changePredict,
  changeTarget,
  changeDescription,
  loadContent,
  initContent,
} = writeReducer.actions;

export default writeReducer.reducer;
