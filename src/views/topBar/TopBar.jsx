import React from 'react';
import clsx from 'clsx';
import DesktopContent from './DesktopContent.jsx';
import MobileContent from './MobileContent.jsx';
import useIsMobile from 'hooks/useIsMobile.jsx';
import widthBreakpoints from 'data/widthBreakpoints.js';

const TopBar = () => {
  const blockName = 'top-bar';
  const isMobile = useIsMobile(widthBreakpoints.lg);

  return (
    <nav className={clsx(blockName, isMobile && `${blockName}--mobile`)}>
      {
        isMobile
          ? <MobileContent />
          : <DesktopContent />
      }
    </nav>
  );
};

export default TopBar;
