import React from 'react';
import DesktopContent from './DesktopContent';
import MobileContent from './MobileContent';
import useIsMobile from 'hooks/useIsMobile.jsx';
import { WIDTH_BREAKPOINTS } from 'data/breakpoints';

const TopBar = () => {
  const blockName = 'top-bar';
  const isMobile = useIsMobile(WIDTH_BREAKPOINTS.lg);

  return (
    <nav className={blockName}>
      {
        isMobile
          ? <MobileContent />
          : <DesktopContent />
      }
    </nav>
  );
};

export default TopBar;
