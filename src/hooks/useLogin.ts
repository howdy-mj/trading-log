import { useEffect, useState } from 'react';

import { auth } from '~service/firebase';
import { useDispatch } from 'react-redux';
import { updateUser } from '~store/user/reducer';

function useLogin() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      // console.log('user', user);
      if (user) {
        // const displayName = user.displayName;
        // const email = user.email;
        // const photoURL = user.photoURL;
        // const emailVerified = user.emailVerified;
        const token = user.uid;
        dispatch(updateUser(token));

        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  return { isLogin };
}

export default useLogin;
