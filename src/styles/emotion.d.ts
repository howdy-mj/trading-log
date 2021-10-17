import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      danger: string;
      active: string;
      up: string;
      down: string;
    };
    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
