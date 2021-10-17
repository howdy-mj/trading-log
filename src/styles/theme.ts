import { Theme } from '@emotion/react';

export const size = {
  largest: '75em', // 1200px
  large: '56.25em', // 900px
  medium: '37.5em', // 600px
  small: '31.25em', // 500px
  smallest: '25em', // 400px
};

// const color = {
//   one: '#1E2735',
//   two: '#162E3B',
//   three: '#054C5A',
//   four: '#005F60',
//   five: '#FE8C03',
// };

const theme: Theme = {
  color: {
    // danger: '#b46e64',
    // active: '#64b4b0',
    danger: '#e84549',
    active: '#0ca678',
    up: '#03a66d',
    down: '#cf304a',
  },
  mq: {
    laptop: `only screen and (min-width: ${size.largest})`,
    tablet: `only screen and (max-width: ${size.large})`,
    mobile: `only screen and (max-width: ${size.small})`,
  },
};

export default theme;
