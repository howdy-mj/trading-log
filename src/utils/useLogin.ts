import { firebaseAuth } from '../service/firebase';
import { useEffect, useState } from 'react';

function useLogin() {
  // const [init, setInit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      // setInit(true);
    });
  }, []);

  return { isLogin };
}

export default useLogin;
