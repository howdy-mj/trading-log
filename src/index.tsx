import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

import store from './store/configureStore';
import theme from '@styles/theme';
import GlobalStyle from '@styles/global';

import App from './App';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Sentry.ErrorBoundary fallback={'An error has occurred'}>
        <App />
      </Sentry.ErrorBoundary>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
