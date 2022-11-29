import React, { useState } from 'react';
import { exact, arrayOf, shape, string } from 'prop-types';
import clsx from 'clsx';
import { sortByMainField, generateTooltipHeaderText, generateTooltipSecondaryText } from 'utils/userPanelAvatars.js';
import Tooltip from 'components/Tooltip.jsx';
import SubmitButton from 'components/SubmitButton.jsx';

const PresentAvatarsContent = ({ avatars }) => {
  const blockName = 'present-avatars';
  const avatarsCopy = JSON.parse(JSON.stringify(avatars));
  const tooltipOpeningInitialState = Array(avatars.length).fill(false);
  const [tooltipOpeningState, setTooltipOpeningState] = useState(tooltipOpeningInitialState);
  const [selectedAvatar, setSelectedAvatar] = useState(0);

  const toggleTooltipsVisible = (index) => {
    const tooltipOpeningNewState = [...tooltipOpeningState];
    tooltipOpeningNewState[index] = !tooltipOpeningState[index];

    setTooltipOpeningState(tooltipOpeningNewState);
  };

  const handleSubmitOnMouseDown = () => {
    const newAvatarsSelection = JSON.parse(JSON.stringify(avatars));
    newAvatarsSelection.forEach((avatar, avatarIndex) => {
      avatar.main = avatarIndex === selectedAvatar;
    });
  };

  return (
    <div className={blockName}>
      <h1 className={`${blockName}__header`}>Zarządzaj avatarami</h1>
      <div className={`${blockName}__avatars-list-wrapper`}>
        <ul className={`${blockName}__avatars-list`}>
          {
            avatarsCopy.sort(sortByMainField).map((avatar, index) => {
              const tooltipHeaderText = generateTooltipHeaderText({ index, selectedAvatar });
              const tooltipSecondaryText = generateTooltipSecondaryText({ index, selectedAvatar });

              return (
                <div
                  className={clsx(
                    `${blockName}__list-item-wrapper`,
                    selectedAvatar === index && `${blockName}__list-item-wrapper--selected`
                  )}
                  onMouseEnter={() => toggleTooltipsVisible(index)}
                  onMouseLeave={() => toggleTooltipsVisible(index)}
                  onMouseDown={() => setSelectedAvatar(index)}
                  role="button"
                  tabIndex={0}
                >
                  <Tooltip
                    open={tooltipOpeningState[index]}
                    headerText={tooltipHeaderText}
                    secondaryText={tooltipSecondaryText}
                  >
                    <img
                      src={avatar.storagePath}
                      alt="Avatar"
                      className={`${blockName}__list-item`}
                    />
                  </Tooltip>
                </div>
              );
            })
          }
        </ul>
      </div>
      <SubmitButton
        onMouseDown={handleSubmitOnMouseDown}
        value="Zaktualizuj avatary"
        classNames={`${blockName}__submit-button`}
      />
    </div>
  );
};

PresentAvatarsContent.propTypes = exact({
  avatars: arrayOf(
    shape({
      main: string.isRequired,
      storagePath: string.isRequired
    }).isRequired
  ).isRequired
}).isRequired;

export default PresentAvatarsContent;
