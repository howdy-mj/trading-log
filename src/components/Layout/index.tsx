import styled from '@emotion/styled';
import useHeight from '~hooks/useHeight';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Footer from './Footer';

import Header from './Header';

interface LayoutProps {
  children: React.ReactChild;
}

const Layout = ({ children }: LayoutProps) => {
  const height = useHeight();
  const { pathname } = useLocation();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (pathname === '/login') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [pathname]);

  return (
    <LayoutWrap>
      {!isLogin && <Header />}
      <Body height={height}>{children}</Body>
      <Footer />
    </LayoutWrap>
  );
};

const LayoutWrap = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 120rem;

  > header {
    text-align: center;
    margin-top: 3rem;
  }

  ${(props) => props.theme.mq.tablet} {
    max-width: 80rem;
  }
  ${(props) => props.theme.mq.mobile} {
    max-width: 50rem;
  }
`;

const Body = styled.div<{ height: number }>`
  display: flex;
  justify-content: center;
  padding-top: 7rem;
  min-height: ${(props) => props.height - 250}px;
`;

export default Layout;
