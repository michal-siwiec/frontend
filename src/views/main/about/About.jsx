import React from 'react';
import DesktopMenagers from './DesktopMenagers.jsx';
import MobileMenagers from './MobileMenagers.jsx';
import useIsMobile from 'hooks/useIsMobile.jsx';
import { companyDescription } from 'data/about.js';
import widthBreakpoints from 'data/widthBreakpoints.js';

const About = () => {
  const blockName = 'about';
  const isMobile = useIsMobile(widthBreakpoints.xl);

  return (
    <div className={blockName}>
      <div className={`${blockName}__info-wrapper`}>
        <h2 className={`${blockName}__header`}>O nas</h2>
        <div className={`${blockName}__renowation-picture`} />
        <div className={`${blockName}__info-description`} dangerouslySetInnerHTML={{ __html: companyDescription }} />
      </div>
      <div className={`${blockName}__managers-wrapper`}>
        {
          isMobile
            ? <MobileMenagers />
            : <DesktopMenagers />
        }
      </div>
    </div>
  );
};

export default About;
