import DesktopContent from './DesktopContent.jsx';
import MobileContent from './MobileContent.jsx';
import useIsMobile from 'hooks/useIsMobile.jsx';
import { WIDTH_BREAKPOINTS } from 'data/breakpoints.ts';

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
