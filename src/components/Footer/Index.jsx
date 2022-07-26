import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FileDownloader from '../../services/fileDownloader';
import {
  productsCategories,
  privacyPolicy,
  shopRules,
  socials,
  shopMail,
  shopPhone,
  shopRulesText,
  privacyPolicyText
} from './data';
import { formatPhoneNumber } from '../../utils/phoneNumber';
import Tooltip from '../reusable/tooltips/Index.jsx';
import { STORAGE_URL } from '../../constants/environment';

const Footer = () => {
  const blockName = 'footer'

  const [privacyPolicyTooltipOpen, setPrivacyPolicyTooltipOpen] = useState(false);
  const [shopRulesTooltipOpen, setShopRulesTooltipOpen] = useState(false);

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

  const handlePrivacyPolicyPromptOnHover = (value) => {
    setPrivacyPolicyTooltipOpen(value);
  };

  const handleShopRulesPromptOnHover = (value) => {
    setShopRulesTooltipOpen(value);
  };

  return (
    <footer className={blockName}>
      <div className={`${blockName}__part ${blockName}__logo`}>
        <h4 className={`${blockName}__part-header`}>
          <Link to="/">
            <img
              src={`${STORAGE_URL}/images/logo.svg`}
              alt="Budoman-logo"
              className={`${blockName}__logo-img`}
            />
          </Link>
          <p className={`${blockName}__logo-address`}>
            {`ul. Przykładowa 5, 00-000 Warszawa`}
          </p>
        </h4>
        <div className={`${blockName}__part-content`}>
          <div className={`${blockName}__attachment-wrapper`}>
            <span
              className={`${blockName}__content-element`}
              onClick={handlePrivacyPolicyOnClick}
            >
              Polityka prywatności
            </span>
            <div
              onMouseEnter={() => handlePrivacyPolicyPromptOnHover(true)}
              onMouseLeave={() => handlePrivacyPolicyPromptOnHover(false)}
            >
              <Tooltip
                open={privacyPolicyTooltipOpen}
                headerText="Polityka prywatności"
                secondaryText={privacyPolicyText}
              >
                <i className={`icon-tooltip_prompt ${blockName}__tooltip-prompt`} />
              </Tooltip> 
            </div>
          </div>
          <div className={`${blockName}__attachment-wrapper`}>
            <span
              className={`${blockName}__content-element`}
              onClick={handleShopRulesOnClick}
            >
              Regulamin sklepu
            </span>
            <div
              onMouseEnter={() => handleShopRulesPromptOnHover(true)}
              onMouseLeave={() => handleShopRulesPromptOnHover(false)}
            >
              <Tooltip
                open={shopRulesTooltipOpen}
                headerText="Regulamin sklepu"
                secondaryText={shopRulesText}
              >
                <i className={`icon-tooltip_prompt ${blockName}__tooltip-prompt`} />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className={`${blockName}__part`}>
        <h4 className={`${blockName}__part-header`}>Produkty</h4>
        <div className={`${blockName}__part-content ${blockName}__part-content--products`}>
          {
            productsCategories.map(({ name, path }) => (
              <div key={`${blockName}-product-cathegory-${name}`}>
                <Link to={path}>
                  <span className={`${blockName}__content-element`}>
                    {name}
                  </span>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
      <div className={`${blockName}__part`}>
        <h4 className={`${blockName}__part-header`}>Kontakt</h4>
        <div className={`${blockName}__part-content`}>
          <div>
            <span
              className={`${blockName}__content-element`}
              onClick={handleEmailOnClick}
            >
              Email: {shopMail}
            </span>
          </div>
          <div>
            <span
              className={`${blockName}__content-element`}
              onClick={handlePhoneOnClick}
            >
              { `Telefon: ${formatPhoneNumber(shopPhone)}` }
            </span>
          </div>
        </div>
      </div>
      <div className={`${blockName}__part`}>
        <h4 className={`${blockName}__part-header`}>Social media</h4>
        <div className={`${blockName}__part-content ${blockName}__part-content--socials`}>
          {
            socials.map(({ iconClass, url }) => (
              <div
                className={`${blockName}__social`}
                key={`${iconClass}-wrapper`}
              >
                <i
                  className={`${iconClass} ${blockName}__content-element ${`${blockName}__social-icon`}`}
                  onClick={() => handleSocialOnClick(url)}
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className={`${blockName}__copyright`}>
        <p>
          Copyright © 2022 The GraphQL Foundation. All rights reserved.
        </p>
        <p>
          For web site terms of use, trademark policy and general project policies please see https://lfprojects.org.
        </p>
      </div>
    </footer>
  )
};

export default Footer;
