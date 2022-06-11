import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaArrowLeft, FaRegUserCircle } from 'react-icons/fa';

import useLogin from '~hooks/useLogin';
import { selectUserPhotoUrl } from '~store/user/selector';
import SiteTitle from '~components/SiteTitle/index';

const HeaderComponent = () => {
  const { isLogin } = useLogin();
  const { pathname } = useLocation();
  const history = useHistory();

  const userPhoto = useSelector(selectUserPhotoUrl);

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

  return (
    <HeaderWrap>
      <HeaderContainer>
        <SiteTitle />
        {hasGoBack && (
          <GoBackArrow onClick={() => history.goBack()}>
            <FaArrowLeft />
          </GoBackArrow>
        )}
        {isLogin && (
          <LogoutButton onClick={() => history.push('/my-page')}>
            {userPhoto ? (
              <UserThumbnail src={userPhoto} alt="user profile" />
            ) : (
              <FaRegUserCircle />
            )}
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

  > svg {
    width: 4rem;
    height: 4rem;
  }
`;

const UserThumbnail = styled.img`
  width: 4rem;
  height: 4rem;
  border: 1px solid ${(props) => props.theme.color.active};
  border-radius: 50%;
`;
