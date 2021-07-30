import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router';
import { Button } from '@blueprintjs/core';

import { Title } from '~components/Title';
import useLogin from '~hooks/useLogin';

const Header = () => {
  const { isLogin } = useLogin();
  const location = useLocation();

  const [isDetail, setIsDetail] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('detail')) {
      setIsDetail(true);
      return;
    }
    setIsDetail(false);
  }, [location.pathname]);

  console.log('isDetail', isDetail);

  return (
    <HeaderWrap>
      <Title />
      {isDetail && (
        <GoBackArrow onClick={() => history.back()}>뒤로가기</GoBackArrow>
      )}
      {isLogin && (
        <LoginButton>
          <Button>로그아웃</Button>
        </LoginButton>
      )}
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  position: relative;
`;

const LoginButton = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  cursor: pointer;

  > svg {
    font-size: 25px;
  }
`;

const GoBackArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;
