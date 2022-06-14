import React from 'react';
import { Link } from 'react-router-dom';
import FileDownloader from '../../services/fileDownloader';
import { productsCategories, privacyPolicy, shopRules, socials, shopMail, shopPhone } from './data';
import { formattedPhoneNUmber } from '../../utils/phoneNumber';

const Footer = () => {
  const blockName = 'footer'

  const handlePrivacyPolicyOnClick = () => {
    const { url, outputName } = privacyPolicy;
    new FileDownloader({ url, outputName }).call()
  };

  const handleShopRulesOnClick = () => {
    const { url, outputName } = shopRules;
    new FileDownloader({ url, outputName }).call()
  };

  const handleEmailOnClick = () => {
    window.location = `mailto:${shopMail}`
  };

  const handlePhoneOnClick = () => {
    window.location = `tel:${shopPhone}`
  };

  const handleSocialOnClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <foooter className={blockName}>
      <div className={`${blockName}__part ${blockName}__logo`}>
        <h4 className={`${blockName}__header-part`}>
          <Link to="/">
            <img
              // src=""
              alt="Budoman-logo"
              className={`${blockName}__logo-img`}
            />
          </Link>
          <p className={`${blockName}__logo-address`}>
            {`ul. Przykładowa 5, 00-000 Warszawa`}
          </p>
        </h4>
        <div className={`${blockName}__content-part`}>
          <div>
            <span
              className={`${blockName}__content-part-element`}
              onClick={handlePrivacyPolicyOnClick}
            >
              Polityka prywatności
            </span>
          </div>
          <div>
            <span
              className={`${blockName}__content-part-element`}
              onClick={handleShopRulesOnClick}  
            >
              Regulamin sklepu
            </span>
          </div>
        </div>
      </div>
      <div className={`${blockName}__part`}>
        <h4 className={`${blockName}__header-part`}>Produkty</h4>
        <div className={`${blockName}__content-part ${blockName}__content-part--products`}>
          {
            productsCategories.map(({ name, path }) => (
              <div>
                <Link to={path}>
                  <span className={`${blockName}__content-part-element`}>
                    {name}
                  </span>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
      <div className={`${blockName}__part`}>
        <h4 className={`${blockName}__header-part`}>Kontakt</h4>
        <div className={`${blockName}__content-part`}>
          <div>
            <span
              className={`${blockName}__content-part-element`}
              onClick={handleEmailOnClick}
            >
              Email: {shopMail}
            </span>
          </div>
          <div>
            <span
              className={`${blockName}__content-part-element`}
              onClick={handlePhoneOnClick}
            >
              { `Telefon: ${formattedPhoneNUmber(shopPhone)}` }
            </span>
          </div>
        </div>
      </div>
      <div className={`${blockName}__part`}>
        <h4 className={`${blockName}__header-part`}>Social media</h4>
        <div className={`${blockName}__content-part`}>
          {
            socials.map(({ iconClass, url }) => (
              <div>
                <i className={iconClass} onClick={() => handleSocialOnClick(url)} />
              </div>
            ))
          }
        </div>
      </div>
    </foooter>
  )
};

export default Footer;
