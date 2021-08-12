export enum MarketInfo {
  KRW = 'KRW',
  BTC = 'BTC',
  USDT = 'USDT',
}

export enum Predict {
  UP = '상승',
  DOWN = '하락',
}

export interface Post {
  title: string;
  market: MarketInfo;
  predict: Predict;
  target: number;
  content: string;
  createdAt: string;
}

export interface PostWithId extends Post {
  id: string;
}
