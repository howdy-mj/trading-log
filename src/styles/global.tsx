import { Global, css } from '@emotion/react';
import { size } from './theme';

const style = css`
  * {
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%; // 1rem = 10px; 10px/16px = 62.5%
    height: 100vh;
    font-family: 'Noto Sans KR', 'Roboto', sans-serif;
    @media only screen and (max-width: ${size.smallest}) {
      font-size: 50%;
    }
  }
  body {
    box-sizing: border-box;
    font-size: 1.6rem;
  }
  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
      text-decoration: inherit;
    }
  }
  input,
  select,
  button {
    -webkit-appearance: none;
    background: none;
    border: none;
    font-size: inherit;
    color: inherit;
    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  a,
  button {
    cursor: pointer;
  }
  pre {
    white-space: pre-line;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
