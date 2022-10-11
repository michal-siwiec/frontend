import React from 'react';
import { Link } from 'react-router-dom';
import { STORAGE_URL } from 'utils/environment.js';

const Logo = () => {
  const blockName = 'top-bar-elements';

  return (
    <div className={`${blockName}__logo`}>
      <Link to="/">
        <img
          src={`${STORAGE_URL}/images/logo.svg`}
          alt="Budoman logo"
          className={`${blockName}__logo-img`}
        />
      </Link>
    </div>
  );
};

export default Logo;
