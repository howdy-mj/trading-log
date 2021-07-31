import { useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import { Main, Login, Detail, Write } from '~pages/index';

const history = createBrowserHistory();

Sentry.init({
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),
    }),
  ],
});

interface PathItem {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
}

const routesPath: PathItem[] = [
  {
    path: '/',
    component: <Main />,
    exact: true,
  },
  { path: '/login', component: <Login /> },
  { path: '/write', component: <Write /> },
  { path: '/detail/:id', component: <Detail /> },
];

export const Router = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.body.scrollTop = 0;
  }, [pathname]);
  return (
    <Switch>
      {routesPath.map(({ path, component, exact = false }) => (
        <Route key={path} path={path} exact={exact}>
          {component}
        </Route>
      ))}
      <Redirect from="*" to="/" />
    </Switch>
  );
};
