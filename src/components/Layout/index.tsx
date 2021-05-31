import styled from '@emotion/styled';
import useHeight from '@utils/useHeight';
import Footer from './Footer';

import Header from './Header';

interface LayoutProps {
  children: React.ReactChild;
}

const Layout = ({ children }: LayoutProps) => {
  const height = useHeight();

  return (
    <LayoutWrap>
      <Header />
      <Body height={height}>{children}</Body>
      <Footer />
    </LayoutWrap>
  );
};

const LayoutWrap = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;

  > header {
    text-align: center;
    margin-top: 30px;
  }

  ${(props) => props.theme.mq.tablet} {
    max-width: 800px;
  }
  ${(props) => props.theme.mq.mobile} {
    max-width: 500px;
  }
`;

const Body = styled.div<{ height: number }>`
  min-height: ${(props) => props.height - 220}px;
`;

export default Layout;
