import { useEffect, useState } from 'react';

import { firebaseAuth } from '~service/firebase';
import { useDispatch } from 'react-redux';
import {
  updateFirebaseIdToken,
  updateRefreshToken,
  updateUid,
} from '~store/auth/reducer';
import { updateUserInfo } from '~store/user/reducer';

function useLogin() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user: any) => {
      if (user) {
        // console.log('user', user);
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        // const emailVerified = user.emailVerified;
        dispatch(updateUserInfo({ displayName, email, photoURL }));

        user.getIdToken().then((token: string) => {
          // console.log('token', token);
          dispatch(updateFirebaseIdToken(token));
        });
        dispatch(updateUid(user.id));
        dispatch(updateRefreshToken(user.refreshToken));

        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  return { isLogin };
}

export default useLogin;
