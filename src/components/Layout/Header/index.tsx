import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router';

import { Title } from '~components/Title';
import useLogin from '~hooks/useLogin';
import ButtonComponent from '~components/Button';
import { googleSignOut } from '~service/firebase';
import { useHistory } from 'react-router-dom';

const HeaderComponent = () => {
  const { isLogin } = useLogin();
  const { pathname } = useLocation();
  const history = useHistory();

  const [isDetailPage, setIsDetailPage] = useState(false);

  useEffect(() => {
    if (pathname.includes('detail')) {
      setIsDetailPage(true);
      return;
    }
    setIsDetailPage(false);
  }, [pathname]);

  const logOut = async () => {
    await googleSignOut().then(() => {
      history.push('/login');
    });
  };

  return (
    <HeaderWrap>
      <Title />
      {isDetailPage && (
        <GoBackArrow onClick={() => history.goBack()}>뒤로가기</GoBackArrow>
      )}
      {isLogin && (
        <LoginButton>
          <ButtonComponent
            label="로그아웃"
            status="info"
            onClick={() => logOut()}
          />
        </LoginButton>
      )}
    </HeaderWrap>
  );
};

export default HeaderComponent;

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
