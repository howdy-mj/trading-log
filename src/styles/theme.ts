export const size = {
  largest: '75em', // 1200px
  large: '56.25em', // 900px
  medium: '37.5em', // 600px
  small: '31.25em', // 500px
  smallest: '25em', // 400px
};

const theme = {
  mainColor: '#0a4297',
  mobile: `only screen and (min-width: ${size.small})`,
  tablet: `only screen and (min-width: ${size.large})`,
  laptop: `only screen and (min-width: ${size.largest})`,
};

export default theme;
