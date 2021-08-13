import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { firebaseAuth } from '~service/firebase';
import { useDispatch } from 'react-redux';
import {
  updateFirebaseIdToken,
  updateRefreshToken,
  updateUid,
} from '~store/auth/reducer';
import { updateUserInfo } from '~store/user/reducer';
import { setItem } from '~utils/storage';

function useLogin() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    firebaseAuth.onAuthStateChanged((user: any) => {
      if (user) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        // const emailVerified = user.emailVerified;
        dispatch(updateUserInfo({ displayName, email, photoURL }));

        user.getIdToken().then((token: string) => {
          dispatch(updateFirebaseIdToken(token));
        });

        dispatch(updateUid(user.id));
        dispatch(updateRefreshToken(user.refreshToken));
        setItem('refresh_token', user.refreshToken);

        setIsLogin(true);
      } else {
        setIsLogin(false);
        history.push('/login');
      }
    });

    return () => {
      abortController.abort();
    };
  }, []);

  return { isLogin };
}

export default useLogin;
