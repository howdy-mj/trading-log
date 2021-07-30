import { ThemeProvider } from '@emotion/react';
import theme from '~styles/theme';
import GlobalStyle from '~styles/global';

import Layout from '~components/Layout';
import { Router } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
