import React from 'react';
import {
  exact,
  arrayOf,
  shape,
  bool,
  string
} from 'prop-types';
import { STORAGE_URL } from 'utils/environment.js';

const Avatar = ({ avatars, classNames }) => {
  const pathToDefaultAvatar = `${STORAGE_URL}/images/empty-avatar.jpeg`;
  const pathToDisplayedAvatar = avatars.find(({ main }) => main)?.storagePath || pathToDefaultAvatar;

  return (
    <img
      src={pathToDisplayedAvatar}
      alt="avatar"
      className={classNames}
    />
  );
};

Avatar.propTypes = exact({
  avatars: arrayOf(
    shape({
      main: bool.isRequired,
      storagePath: string.isRequired
    })
  ),
  classNames: string
}).isRequired;

Avatar.defaultProps = {
  classNames: ''
};

export default Avatar;
