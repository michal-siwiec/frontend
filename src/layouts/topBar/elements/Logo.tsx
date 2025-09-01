import React from 'react';
import { Link } from 'react-router-dom';
import useFetchUrl from 'hooks/useFetchUrl.tsx';

const Logo = () => {
  const blockName = 'top-bar-elements';
  const logoURL = useFetchUrl({ key: 'images/logo.svg' });

  return (
    <div className={`${blockName}__logo`}>
      <Link to="/">
        <img
          // @ts-ignore // TODO
          src={logoURL}
          alt="Budoman logo"
          className={`${blockName}__logo-img`}
        />
      </Link>
    </div>
  );
};

export default Logo;
