import { v4 as uuidv4 } from 'uuid';
import useFetchUrl from 'hooks/useFetchUrl.jsx';
import ShadowedContainer from 'components/containers/ShadowedContainer.jsx';
import { APPEARING_IN_SEQUENCE } from 'data/animations.js';
import { MANAGERS, MAPPED_DIRECTIONS } from 'data/uiElements.js';

const DesktopMenagers = () => {
  const blockName = 'desktop-menagers';
  const managersPictureURL = [];

  MANAGERS.forEach(({ pictureKey }) => {
    const url = useFetchUrl({ key: pictureKey });
    managersPictureURL.push(url);
  });

  return (
    <div className={`${blockName}__managers-circle`} data-testid={`${blockName}-container`}>
      {
        MANAGERS.map(({
          name,
          description,
          position
        }, index) => (
          <ShadowedContainer
            animationAttributes={{
              variants: APPEARING_IN_SEQUENCE,
              custom: index,
              initial: APPEARING_IN_SEQUENCE.hidden,
              animate: APPEARING_IN_SEQUENCE.visible
            }}
            key={uuidv4()}
          >
            <div
              className={`${blockName}__manager ${blockName}__manager--${MAPPED_DIRECTIONS[index]}`}
              data-testid={`${blockName}-manager-${MAPPED_DIRECTIONS[index]}`}
            >
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
                  src={managersPictureURL[index]}
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
