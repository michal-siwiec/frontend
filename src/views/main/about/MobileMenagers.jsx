import React from 'react';
import { managers } from 'data/about.js';

const MobileMenagers = () => {
  const blockName = 'mobile-menagers';

  return (
    <div className={blockName}>
      {
        managers.map(({
          name,
          picturePath,
          description,
          position
        }) => (
          <div className={`${blockName}__menager`}>
            <div className={`${blockName}__manager-picture-wrapper`}>
              <img
                src={picturePath}
                alt={`${name} zdjęcie`}
                className={`${blockName}__manager-picture`}
              />
            </div>
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
          </div>
        ))
      }
    </div>
  );
};

export default MobileMenagers;
