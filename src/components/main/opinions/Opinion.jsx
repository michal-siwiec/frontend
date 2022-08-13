import React, { Fragment } from 'react';
import { exact, string, number } from 'prop-types';
import ShadowedBox from '../../reusable/containers/ShadowedBox.jsx';
import Rating from '../../reusable/various/Rating.jsx';
import Avatar from '../../reusable/various/Avatar.jsx';

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

  return (
    <ShadowedBox classNames={blockName}>
      <Fragment>
        <div className={`${blockName}__picture-wrapper`}>
          <Avatar
            avatars={avatars}
            classNames={`${blockName}__picture`}
          />
        </div>
        <div className={`${blockName}__user-name`}>{email}</div>
        <div className={`${blockName}__user-email`}>{email}</div>
        <div className={`${blockName}__updated-at`}>{updatedAt}</div>
        <div className={`${blockName}__mark`}>
          <Rating value={mark} readOnly />
        </div>
        <div className={`${blockName}__content-wrapper`}>
          <p className={`${blockName}__content`}>{content}</p>
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
