import { useState, useEffect } from 'react';
import { WIDTH_BREAKPOINTS } from 'data/breakpoints.js';

// TODO: Why do I need two similar vars "mobileBreakPoint"? let's refactor it
const useIsMobile = (mobileBreakPoint_ = WIDTH_BREAKPOINTS.md) => {
  const mobileBreakPoint = mobileBreakPoint_;
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
