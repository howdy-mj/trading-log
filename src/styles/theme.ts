export const size = {
  largest: '75em', // 1200px
  large: '56.25em', // 900px
  medium: '37.5em', // 600px
  small: '31.25em', // 500px
  smallest: '25em', // 400px
};

const color = {
  one: '#1E2735',
  two: '#162E3B',
  three: '#054C5A',
  four: '#005F60',
  five: '#FE8C03',
};

const theme = {
  mainColor: '#0000ff',
  mq: {
    laptop: `@media only screen and (min-width: ${size.largest})`,
    tablet: `@media only screen and (min-width: ${size.large})`,
    mobile: `@media only screen and (min-width: ${size.small})`,
  },
};

export default theme;
