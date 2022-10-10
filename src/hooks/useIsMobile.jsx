import { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import widthBreakpoints from 'data/widthBreakpoints.js';

const useIsMobile = (mobileBreakPoint_ = widthBreakpoints.md) => {
  const mobileBreakPoint = mobileBreakPoint_;
  const timeAfterCallFunction = 250;
  const [isMobile, setIsMobile] = useState(false);

  const setMobility = () => {
    setIsMobile(window.innerWidth < mobileBreakPoint);
  };

  useEffect(() => {
    window.addEventListener('resize', debounce(setMobility, timeAfterCallFunction));

    return () => window.removeEventListener('resize', setMobility);
  }, []);

  return isMobile;
};

export default useIsMobile;
