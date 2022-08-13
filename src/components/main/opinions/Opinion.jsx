import React, { Fragment } from 'react';
import { exact, string, number } from 'prop-types';
import ShadowedBox from '../../reusable/containers/ShadowedBox.jsx';
import Rating from '../../reusable/Rating.jsx';

const Opinion = ({
  opinionsData: {
    content,
    mark,
    updatedAt,
    user: {
      email
    }
  }
}) => {
  const blockName = 'opinion';

  return (
    <ShadowedBox classNames="opinion">
      <Fragment>
        <div className={`${blockName}__picture`} />
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
