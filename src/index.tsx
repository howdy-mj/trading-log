import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import store from './store/configureStore';
import App from './App';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <Sentry.ErrorBoundary fallback={'An error has occurred'}> */}
      <App />
      {/* </Sentry.ErrorBoundary> */}
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
