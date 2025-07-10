import DesktopMenagers from './DesktopMenagers.jsx';
import MobileMenagers from './MobileMenagers.jsx';
import useIsMobile from 'hooks/useIsMobile.jsx';
import useFetchUrl from 'hooks/useFetchUrl.jsx';
import { COMPANY_DESCRIPTION } from 'data/uiElements.js';
import { WIDTH_BREAKPOINTS } from 'data/breakpoints.js';

const About = () => {
  const blockName = 'about';
  const isMobile = useIsMobile(WIDTH_BREAKPOINTS.xl);
  const backgroundPictureURL = useFetchUrl({ key: 'images/construction-photos/roof-renowation.jpg' });

  return (
    <div className={blockName}>
      <div className={`${blockName}__info-wrapper`}>
        <h2 className={`${blockName}__header`}>O nas</h2>
        <div
          style={{ backgroundImage: `url(${backgroundPictureURL})` }}
          className={`${blockName}__renowation-picture`}
          data-testid={`${blockName}-picture-container`}
        />
        <div className={`${blockName}__info-description`} dangerouslySetInnerHTML={{ __html: COMPANY_DESCRIPTION }} />
      </div>
      <div className={`${blockName}__managers-wrapper`}>
        { isMobile ? <MobileMenagers /> : <DesktopMenagers /> }
      </div>
    </div>
  );
};

export default About;
