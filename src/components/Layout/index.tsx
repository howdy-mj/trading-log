import styled from '@emotion/styled';
import useHeight from '~hooks/useHeight';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// import useLogin from '~hooks/useLogin';

import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactChild;
}

const Layout = ({ children }: LayoutProps) => {
  const height = useHeight();
  // const { isLogin } = useLogin();
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
      {!isLoginPage && <Footer />}
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
