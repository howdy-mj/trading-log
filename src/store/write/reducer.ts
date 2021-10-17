import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MARKET, PREDICT } from '~models/post.model';

export interface WriteState {
  id: string;
  title: string;
  market: MARKET;
  predict: PREDICT;
  target: number;
  description: string;
  createdAt: string;
}

const initialState: WriteState = {
  id: '',
  title: '',
  market: MARKET.KRW,
  predict: PREDICT.UP,
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
    changeMarket(state, action: PayloadAction<MARKET>) {
      return { ...state, market: action.payload };
    },
    changePredict(state, action: PayloadAction<PREDICT>) {
      return { ...state, predict: action.payload };
    },
    changeTarget(state, action: PayloadAction<number>) {
      return { ...state, target: action.payload };
    },
    changeDescription(state, action: PayloadAction<string>) {
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
