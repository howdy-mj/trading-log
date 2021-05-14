import { useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Main from '@pages/Main';

interface PathItem {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
}

const routesPath: PathItem[] = [
  {
    path: '/',
    component: Main,
    exact: true,
  },
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
