import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const usePathname = (path: string = '') => {
  const { pathname } = useLocation();
  const [name, setName] = useState<string>('');
  const [includePath, setIncludePath] = useState<boolean>(false);

  useEffect(() => {
    setName(pathname);

    const findSamePathList = pathname
      .split('/')
      .filter((curr) => curr === path);
    const hasPath =
      findSamePathList[0] === ''
        ? false
        : findSamePathList.some((list) => list === path);

    setIncludePath(hasPath);
  }, [pathname]);

  return { currentPath: name, includePath };
};

export default usePathname;
