import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      danger: string;
      active: string;
    };
    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
