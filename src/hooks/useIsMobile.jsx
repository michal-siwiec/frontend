import { useState, useEffect } from 'react';
import { WIDTH_BREAKPOINTS } from 'data/breakpoints.ts';

const useIsMobile = (mobileBreakPoint = WIDTH_BREAKPOINTS.md) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobileBreakPoint);

  const setMobility = () => {
    setIsMobile(window.innerWidth < mobileBreakPoint);
  };

  useEffect(() => {
    window.addEventListener('resize', setMobility);

    return () => window.removeEventListener('resize', setMobility);
  }, []);

  return isMobile;
};

export default useIsMobile;
