import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styled from '@emotion/styled';

import { googleSignOut } from '~service/firebase';
import { initUserData } from '~store/auth/reducer';
import useLogin from '~hooks/useLogin';
import { Title } from '~components/Title';
import ButtonComponent from '~components/Button';

const HeaderComponent = () => {
  const { isLogin } = useLogin();
  const { pathname } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

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
      dispatch(initUserData());
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
  display: flex;
  justify-content: center;
  position: relative;
`;

const GoBackArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  cursor: pointer;
`;

const LoginButton = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;

  > svg {
    font-size: 25px;
  }
`;
