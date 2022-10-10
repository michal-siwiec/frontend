import React, { Fragment } from 'react';
import ShadowedContainer from 'components/containers/ShadowedContainer.jsx';
import { appearingInSequence } from 'data/animations.js';
import {
  companyDescription,
  managers,
  mappedDirections,
  mappedDividersColors
} from 'data/about.js';

const About = () => {
  const blockName = 'about';

  return (
    <div className={blockName}>
      <div className={`${blockName}__info-wrapper`}>
        <h2 className={`${blockName}__header`}>O nas</h2>
        <div className={`${blockName}__renowation-picture`} />
        <div className={`${blockName}__info-description`} dangerouslySetInnerHTML={{ __html: companyDescription }} />
      </div>
      <div className={`${blockName}__managers-wrapper`}>
        <div className={`${blockName}__managers-circle`}>
          {
            managers.map(({
              name,
              picturePath,
              description,
              position
            }, index) => (
              <ShadowedContainer
                animationAttributes={{
                  variants: appearingInSequence,
                  custom: index,
                  initial: appearingInSequence.hidden,
                  animate: appearingInSequence.visible
                }}
              >
                <div className={`${blockName}__manager ${blockName}__manager--${mappedDirections[index]}`}>
                  <div className={`${blockName}__manager-details-wrapper`}>
                    <div className={`${blockName}__manager-name`}>
                      {name}
                    </div>
                    <div className={`${blockName}__divider ${blockName}__divider--${mappedDividersColors[index]}`} />
                    <div className={`${blockName}__manager-position`}>
                      {position}
                    </div>
                    <div className={`${blockName}__manager-description`}>
                      {description}
                    </div>
                  </div>
                  <div className={`${blockName}__manager-picture-wrapper`}>
                    <img
                      src={picturePath}
                      alt={`${name} zdjęcie`}
                      className={`${blockName}__manager-picture`}
                    />
                  </div>
                </div>
              </ShadowedContainer>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default About;
