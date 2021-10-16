import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styled from '@emotion/styled';
import { FiLogOut } from 'react-icons/fi';

import useLogin from '~hooks/useLogin';
import { googleSignOut } from '~service/fb_auth';
import { initUserData } from '~store/auth/reducer';
import { clearAllToken } from '~utils/storage';

import { Title } from '~components/Title';

const HeaderComponent = () => {
  const { isLogin } = useLogin();
  const { pathname } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const [hasGoBack, setHasGoBack] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const condition = pathname.includes('detail') || pathname.includes('write');
    if (condition) {
      setHasGoBack(true);
      return;
    }
    setHasGoBack(false);
    return () => {
      abortController.abort();
    };
  }, [pathname]);

  const logOut = async () => {
    await googleSignOut().then(() => {
      dispatch(initUserData());
      clearAllToken();
      history.push('/login');
    });
  };

  return (
    <HeaderWrap>
      <HeaderContainer>
        <Title />
        {hasGoBack && (
          <GoBackArrow onClick={() => history.goBack()}>
            <FaArrowLeft />
          </GoBackArrow>
        )}
        {isLogin && (
          <LogoutButton>
            <LogoutSVG onClick={() => logOut()} />
          </LogoutButton>
        )}
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default HeaderComponent;

const HeaderWrap = styled.header`
  display: flex;
  justify-content: center;

  height: 4rem;
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
`;

const GoBackArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  cursor: pointer;
`;

const LogoutButton = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
`;

const LogoutSVG = styled(FiLogOut)`
  font-size: 2.5rem;
`;
