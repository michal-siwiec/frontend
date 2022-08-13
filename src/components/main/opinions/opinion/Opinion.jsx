import React, { Fragment, useState } from 'react';
import { exact, string, number } from 'prop-types';
import { getFirstNCharacters, shouldDisplayTextExpander } from './helpers.js';
import ShadowedBox from '../../../reusable/containers/ShadowedBox.jsx';
import Rating from '../../../reusable/various/Rating.jsx';
import Avatar from '../../../reusable/various/Avatar.jsx';
import AnimatedPresenceContainer
  from '../../../reusable/containers/AnimatedPresenceContainer/AnimatedPresenceContainer.jsx';

const Opinion = ({
  opinionsData: {
    content,
    mark,
    updatedAt,
    user: {
      email,
      avatars
    }
  }
}) => {
  const blockName = 'opinion';
  const displayedNumberOfChars = 25;
  const narrowContent = getFirstNCharacters({ string: content, charsQuantity: displayedNumberOfChars });
  const shouldDisplayExpander = shouldDisplayTextExpander({ string: content, charsQuantity: displayedNumberOfChars });
  const [contentExpanded, setContentExpanded] = useState(false);

  const handleExpandContentOnMouseDown = () => {
    setContentExpanded(!contentExpanded);
  };

  return (
    <ShadowedBox classNames={blockName}>
      <Fragment>
        <div className={`${blockName}__picture-wrapper`}>
          <Avatar
            avatars={avatars}
            classNames={`${blockName}__picture`}
          />
        </div>
        <div className={`${blockName}__user-email`}>{email}</div>
        <div className={`${blockName}__updated-at`}>{updatedAt}</div>
        <div className={`${blockName}__mark`}>
          <Rating value={mark} readOnly />
        </div>
        <div className={`${blockName}__content-wrapper`}>
          <p className={`${blockName}__content`}>
            { !contentExpanded && `"${narrowContent}..."`}
            {
              contentExpanded && (
                <AnimatedPresenceContainer>
                  {`"${content}"`}
                </AnimatedPresenceContainer>
              )
            }
          </p>
          {
            shouldDisplayExpander && (
              <span
                className={`${blockName}__content-expander`}
                onMouseDown={handleExpandContentOnMouseDown}
                role="button"
                tabIndex={0}
              >
                { contentExpanded ? 'Schowaj' : 'Czytaj więcej' }
              </span>
            )
          }
        </div>
      </Fragment>
    </ShadowedBox>
  );
};

Opinion.propTypes = exact({
  content: string.isRequired,
  mark: number.isRequired,
  updatedAt: string.isRequired,
  email: string.isRequired
}).isRequired;

export default Opinion;
