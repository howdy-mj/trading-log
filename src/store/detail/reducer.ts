import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MARKET, PREDICT } from '~models/post.model';

export interface PostDetailState {
  id: string;
  title: string;
  market: MARKET;
  predict: PREDICT;
  target: number;
  description: string;
}

const initialState: PostDetailState = {
  id: '',
  title: '',
  market: MARKET.KRW,
  predict: PREDICT.UP,
  target: 0,
  description: '',
};

const postDetailReducer = createSlice({
  name: 'postDetail',
  initialState,
  reducers: {
    amendTitle(state, action: PayloadAction<string>) {
      return { ...state, title: action.payload };
    },
    amendMarket(state, action: PayloadAction<MARKET>) {
      return { ...state, market: action.payload };
    },
    amendPredict(state, action: PayloadAction<PREDICT>) {
      return { ...state, predict: action.payload };
    },
    amendTarget(state, action: PayloadAction<number>) {
      return { ...state, target: action.payload };
    },
    amendDescription(state, action: PayloadAction<string>) {
      return { ...state, description: action.payload };
    },
    loadAmendContent(state, action: PayloadAction<PostDetailState>) {
      const { id, title, market, predict, target, description } =
        action.payload;
      return {
        ...state,
        id,
        title,
        market,
        predict,
        target,
        description,
      };
    },
    initContent() {
      return initialState;
    },
  },
});

export const {
  amendTitle,
  amendMarket,
  amendPredict,
  amendTarget,
  amendDescription,
  loadAmendContent,
  initContent,
} = postDetailReducer.actions;

export default postDetailReducer.reducer;
