import { useState, useEffect } from 'react';

function useWidth() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return width;
}

export default useWidth;
