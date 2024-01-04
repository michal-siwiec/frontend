import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useFetchUrl from 'hooks/useFetchUrl.jsx';
import { managers } from 'data/about.js';

const MobileMenagers = () => {
  const blockName = 'mobile-menagers';
  const managersPictureURL = [];

  managers.forEach(({ pictureKey }) => {
    const url = useFetchUrl({ key: pictureKey });
    managersPictureURL.push(url);
  });

  return (
    <div className={blockName}>
      {
        managers.map(({
          name,
          description,
          position
        }, index) => (
          <div className={`${blockName}__menager`} key={uuidv4()} data-cy={`manager-${index}`}>
            <div className={`${blockName}__manager-picture-wrapper`}>
              <img
                src={managersPictureURL[index]}
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
