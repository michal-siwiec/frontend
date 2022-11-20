import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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
        }, index) => (
          <div className={`${blockName}__menager`} key={uuidv4()} data-cy={`manager-${index}`}>
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
