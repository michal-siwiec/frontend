import { useState, useEffect } from 'react';
import widthBreakpoints from 'data/widthBreakpoints.js';

const useIsMobile = (mobileBreakPoint_ = widthBreakpoints.md) => {
  const mobileBreakPoint = mobileBreakPoint_;
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobileBreakPoint);

  const setMobility = () => {
    setIsMobile(window.innerWidth < mobileBreakPoint);
  };

  useEffect(() => {
    window.addEventListener('resize', setMobility);

    return () => window.removeEventListener('resize', setMobility);
  }, []);

  return false;
};

export default useIsMobile;
