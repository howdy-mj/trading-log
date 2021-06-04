import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const usePathname = () => {
  const { pathname } = useLocation();
  const [name, setName] = useState('');
  useEffect(() => {
    setName(pathname);
  }, [pathname]);

  return name;
};

export default usePathname;
