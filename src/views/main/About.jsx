import React, { Fragment } from 'react';
import ShadowedContainer from 'components/containers/ShadowedContainer.jsx';
import { appearingInSequence } from 'data/animations.js';
import { description, managers } from 'data/about.js';

const About = () => {
  const blockName = 'about';

  return (
    <div className={blockName}>
      <div className={`${blockName}__info-wrapper`}>
        <h2 className={`${blockName}__header`}>O nas</h2>
        <div className={`${blockName}__renowation-picture`} />
        <div className={`${blockName}__info-description`} dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div>
        <h2 className={`${blockName}__header`}>Kadra zarządzająca</h2>
        <ul>
          {
            managers.map(({ name, picturePath }, index) => (
              <li className={`${blockName}__managers-list-item`}>
                <ShadowedContainer
                  classNames={`${blockName}__manager`}
                  animationAttributes={{
                    variants: appearingInSequence,
                    custom: index,
                    initial: appearingInSequence.hidden,
                    animate: appearingInSequence.visible
                  }}
                >
                  <Fragment>
                    <div className={`${blockName}__manager-picture-wrapper`}>
                      <img
                        src={picturePath}
                        alt={`${name} zdjęcie`}
                        className={`${blockName}__manager-picture`}
                      />
                    </div>
                    <div className={`${blockName}__manager-name-wrapper`}>
                      <span className={`${blockName}__manager-name`}>
                        {name}
                      </span>
                    </div>
                  </Fragment>
                </ShadowedContainer>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default About;
