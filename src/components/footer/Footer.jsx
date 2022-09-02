import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FileDownloader from 'services/fileDownloader.js';
import { formatPhoneNumber } from 'utils/helpers.js';
import { STORAGE_URL } from 'utils/environment.js';
import {
  productsCategories,
  privacyPolicy,
  shopRules,
  socials,
  shopMail,
  shopPhone,
  shopRulesText,
  privacyPolicyText
} from './data.js';
import Tooltip from '../reusable/various/Tooltip.jsx';

const Footer = () => {
  const blockName = 'footer';

  const [privacyPolicyTooltipOpen, setPrivacyPolicyTooltipOpen] = useState(false);
  const [shopRulesTooltipOpen, setShopRulesTooltipOpen] = useState(false);

  const handlePrivacyPolicyOnMouseDown = () => {
    const { url, outputName } = privacyPolicy;
    new FileDownloader({ url, outputName }).call();
  };

  const handleShopRulesOnMouseDown = () => {
    const { url, outputName } = shopRules;
    new FileDownloader({ url, outputName }).call();
  };

  const handleEmailOnMouseDown = () => {
    window.location = `mailto:${shopMail}`;
  };

  const handlePhoneOnMouseDown = () => {
    window.location = `tel:${shopPhone}`;
  };

  const handleSocialOnMouseDown = (url) => {
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
      <div className={`${blockName}__part`}>
        <h4 className={`${blockName}__part-header`}>
          <Link to="/">
            <img
              src={`${STORAGE_URL}/images/logo.svg`}
              alt="Budoman-logo"
              className={`${blockName}__logo-img`}
            />
          </Link>
          <p className={`${blockName}__logo-address`}>
            ul. Przykładowa 5, 00-000 Warszawa
          </p>
        </h4>
        <div className={`${blockName}__part-content`}>
          <div className={`${blockName}__stretchable-container`}>
            <span
              className={
                `${blockName}__content-element
                 ${blockName}__content-element--tooltip-label`
              }
              onMouseDown={handlePrivacyPolicyOnMouseDown}
              role="link"
              tabIndex={0}
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
                <i className={`icon-tooltip-prompt ${blockName}__tooltip-prompt`} />
              </Tooltip>
            </div>
          </div>
          <div className={`${blockName}__stretchable-container`}>
            <span
              className={
                `${blockName}__content-element
                 ${blockName}__content-element--tooltip-label`
              }
              onMouseDown={handleShopRulesOnMouseDown}
              role="link"
              tabIndex={0}
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
                <i className={`icon-tooltip-prompt ${blockName}__tooltip-prompt`} />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className={`${blockName}__part`}>
        <h4 className={`${blockName}__part-header`}>Produkty</h4>
        <div
          className={
            `${blockName}__part-content
             ${blockName}__part-content--products
             ${blockName}__stretchable-container`
          }
        >
          {
            productsCategories.map(({ name, path }) => (
              <div
                className={`${blockName}__product-cathegory`}
                key={`${blockName}-product-cathegory-${name}`}
              >
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
          <div className={`${blockName}__contact-data`}>
            <span>
              Email:
              <span
                className={`${blockName}__content-element`}
                onMouseDown={handleEmailOnMouseDown}
                role="button"
                tabIndex={0}
              >
                {` ${shopMail}`}
              </span>
            </span>
          </div>
          <div className={`${blockName}__contact-data`}>
            <span>
              Telefon:
              <span
                className={`${blockName}__content-element`}
                onMouseDown={handlePhoneOnMouseDown}
                role="button"
                tabIndex={0}
              >
                {` ${formatPhoneNumber(shopPhone)}`}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className={`${blockName}__part`}>
        <h4 className={`${blockName}__part-header`}>Social media</h4>
        <div
          className={
            `${blockName}__part-content
             ${blockName}__part-content--socials
             ${blockName}__stretchable-container`
          }
        >
          {
            socials.map(({ iconClass, url }) => (
              <div
                className={`${blockName}__social`}
                key={`${iconClass}-wrapper`}
              >
                <i
                  className={`${iconClass} ${blockName}__content-element ${`${blockName}__social-icon`}`}
                  onMouseDown={() => handleSocialOnMouseDown(url)}
                  role="link"
                  tabIndex={0}
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className={`${blockName}__copyright`}>
        <p className={`${blockName}__copyright-text--top`}>
          Copyright © 2022 The GraphQL Foundation. All rights reserved.
        </p>
        <p>
          For web site terms of use, trademark policy and general project policies please see https://lfprojects.org.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
