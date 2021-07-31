import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { googleSignOut } from '~service/firebase';
import useLogin from '~hooks/useLogin';
import { Title } from '~components/Title';
import ButtonComponent from '~components/Button';

const HeaderComponent = () => {
  const { isLogin } = useLogin();
  const { pathname } = useLocation();
  const history = useHistory();

  const [hasGoBack, setHasGoBack] = useState(false);

  useEffect(() => {
    const condition = pathname.includes('detail') || pathname.includes('write');
    if (condition) {
      setHasGoBack(true);
      return;
    }
    setHasGoBack(false);
  }, [pathname]);

  const logOut = async () => {
    await googleSignOut().then(() => {
      history.push('/login');
    });
  };

  return (
    <HeaderWrap>
      <Title />
      {hasGoBack && (
        <GoBackArrow onClick={() => history.goBack()}>
          <FaArrowLeft />
        </GoBackArrow>
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

  cursor: pointer;
`;
