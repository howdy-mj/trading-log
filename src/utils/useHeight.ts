import { useState, useEffect } from 'react';

function useHeight() {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const updateSize = () => {
      setHeight(window.innerHeight);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return height;
}

export default useHeight;
