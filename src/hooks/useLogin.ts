import { auth } from '@service/firebase';
import { useEffect, useState } from 'react';

function useLogin() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      // console.log('user', user);
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  return { isLogin };
}

export default useLogin;
