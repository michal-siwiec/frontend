import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ShadowedContainer from 'components/containers/ShadowedContainer.jsx';
import { appearingInSequence } from 'data/animations.js';
import { managers, mappedDirections } from 'data/about.js';

const DesktopMenagers = () => {
  const blockName = 'desktop-menagers';

  return (
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
            key={uuidv4()}
          >
            <div className={`${blockName}__manager ${blockName}__manager--${mappedDirections[index]}`}>
              <div className={`${blockName}__manager-details-wrapper`}>
                <div className={`${blockName}__manager-name`}>
                  {name}
                </div>
                <div className={`${blockName}__divider`} />
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
  );
};

export default DesktopMenagers;
