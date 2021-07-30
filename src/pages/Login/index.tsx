import styled from '@emotion/styled';
import { FcGoogle } from 'react-icons/fc';

import useLogin from '~hooks/useLogin';
import { Title } from '~components/Title';
import { googleSignInPopup } from '~service/firebase';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

const LoginPage = () => {
  const history = useHistory();
  const { isLogin } = useLogin();

  useEffect(() => {
    if (isLogin) {
      history.push('/');
    }
  }, [isLogin]);

  const googleLogin = () => {
    googleSignInPopup().then(() => {
      history.push('/');
    });
  };

  return (
    <Wrap>
      <Title />
      <Container>
        <GoogleLogin onClick={() => googleLogin()}>
          <FcGoogle />
          구글로 로그인
        </GoogleLogin>
      </Container>
    </Wrap>
  );
};

export default LoginPage;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  min-width: 30rem;
  height: 50rem;
  /* box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1); */
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.16);
  border-radius: 1rem;

  > h1 {
    display: flex;
    align-items: center;
    height: 30rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 500px;
  width: 50%;
`;

const GoogleLogin = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  border: 1px solid #ddd;
  border-radius: 5px;

  > svg {
    font-size: 2.5rem;
    margin-right: 5px;
  }
`;
