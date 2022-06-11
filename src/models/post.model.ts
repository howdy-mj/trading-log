export enum MARKET {
  KRW = 'KRW',
  BTC = 'BTC',
  USDT = 'USDT',
}

export enum PREDICT {
  UP = '상승',
  DOWN = '하락',
}

export const marketRadioSelection = [MARKET.KRW, MARKET.BTC, MARKET.USDT];
export const predictRadioSelection = [PREDICT.UP, PREDICT.DOWN];

export interface Post {
  title: string;
  market: MARKET;
  predict: PREDICT;
  target: number;
  description: string;
  createdAt: string;
}

export interface PostWithId extends Post {
  id: string;
}
