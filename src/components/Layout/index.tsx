import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useLocation } from 'react-router-dom';

import useHeight from '~hooks/useHeight';
import Header from './Header';
// import Footer from './Footer';

interface LayoutProps {
  children: React.ReactChild;
}

const Layout = ({ children }: LayoutProps) => {
  const height = useHeight();
  const { pathname } = useLocation();
  const [isLoginPage, setIsLoginPage] = useState(false);

  useEffect(() => {
    if (pathname === '/login') {
      setIsLoginPage(true);
    } else {
      setIsLoginPage(false);
    }
  }, [pathname]);

  return (
    <LayoutWrap>
      {!isLoginPage && <Header />}
      <Body height={height}>{children}</Body>
      {/*{!isLoginPage && <Footer />}*/}
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
    padding-top: 3rem;
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

  ${({ height }) =>
    height &&
    css`
      min-height: calc(${height}px - 14rem);
    `}
`;

export default Layout;
