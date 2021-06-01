import useLogin from '@utils/useLogin';
import { useState } from 'react';

const Login = () => {
  const { isLogin } = useLogin();

  return <div>Login</div>;
};

export default Login;
