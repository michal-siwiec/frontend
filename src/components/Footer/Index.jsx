import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const blockName = 'footer'

  return (
    <div className={blockName}>
      <div className={`${blockName}__logo`}>
        <Link to="/">
          <img
            // src="https://olx-development.s3.eu-central-1.amazonaws.com/logo.svg"
            alt="Budoman-logo"
          />
        </Link>
      </div>
      <div className={`${blockName}__privacy-policy`}>
        Polityka prywatności
      </div>
      <div className={`${blockName}__shop-rules`}>
        Regulamin sklepu
      </div>
      <div className={`${blockName}__contact`}>
        Kontakt<br/>{`569${' '}659${' '}564`}
      </div>
    </div>
  )
};
  

export default Footer;
