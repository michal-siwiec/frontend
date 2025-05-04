import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Tooltip from 'components/Tooltip.jsx';
import useFetchUrl from 'hooks/useFetchUrl.jsx';
import fetchFileOnLocalFileSystem from 'services/fetchFileOnLocalFileSystem.js';
import { formatPhoneNumber } from 'utils/helpers.js';
import { FOOTER_MENU_ROUTING } from 'data/routing.js';
import { SHOP_RULES_TEXT, PRIVACY_POLICY_TEXT, SHOP_MAIL, SHOP_PHONE } from 'data/uiElements.js';

const Footer = () => {
  const blockName = 'footer';
  const logoURL = useFetchUrl({ key: 'images/logo.svg' });

  const [privacyPolicyTooltipOpen, setPrivacyPolicyTooltipOpen] = useState(false);
  const [shopRulesTooltipOpen, setShopRulesTooltipOpen] = useState(false);

  const handlePrivacyPolicyOnMouseDown = () => {
    fetchFileOnLocalFileSystem({ key: 'documents/polityka_prywatnosci.pdf', fileName: 'Polityka prywatności.pdf' });
  };

  const handleShopRulesOnMouseDown = () => {
    fetchFileOnLocalFileSystem({ key: 'documents/regulamin_sklepu.pdf', fileName: 'Regulamin sklepu.pdf' });
  };

  const handleEmailOnMouseDown = () => window.location = `mailto:${SHOP_MAIL}`;
  const handlePhoneOnMouseDown = () => window.location = `tel:${SHOP_PHONE}`;
  const handleSocialOnMouseDown = (url) => window.open(url, '_blank');
  const handlePrivacyPolicyPromptOnHover = (value) => setPrivacyPolicyTooltipOpen(value);
  const handleShopRulesPromptOnHover = (value) => setShopRulesTooltipOpen(value);

  return (
    <footer className={blockName}>
      <div className={`${blockName}__part`}>
        <h4 className={`${blockName}__part-header`}>
          <Link to="/">
            <img
              src={logoURL}
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
              data-cy="policy-privacy-label"
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
                secondaryText={PRIVACY_POLICY_TEXT}
                id="policy-privacy-tooltip"
              >
                <LiveHelpIcon className={`${blockName}__tooltip-prompt`} data-cy="policy-privacy-prompt" />
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
              data-cy="shop-regulation-label"
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
                secondaryText={SHOP_RULES_TEXT}
                id="shop-regulation-tooltip"
              >
                <LiveHelpIcon className={`${blockName}__tooltip-prompt`} data-cy="shop-regulation-prompt" />
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
            FOOTER_MENU_ROUTING.map(({ name, path, dataCy }) => (
              <div
                className={`${blockName}__product-cathegory`}
                key={`${blockName}-product-cathegory-${name}`}
                data-cy={dataCy}
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
                <a href={`mailto:${SHOP_MAIL}`} className={`${blockName}__content-element`}>
                  {` ${SHOP_MAIL}`}
                </a>
            </span>
          </div>
          <div className={`${blockName}__contact-data`}>
            <span>
              Telefon:
              <a href={`tel:${SHOP_PHONE}`} className={`${blockName}__content-element`}>
                {` ${formatPhoneNumber(SHOP_PHONE)}`}
              </a>
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
          <div className={`${blockName}__social`} key="icon-facebook-wrapper">
            <FacebookIcon
              className={`${blockName}__content-element ${blockName}__social-icon`}
              onMouseDown={() => handleSocialOnMouseDown('https://www.facebook.com/')}
              role="link"
              tabIndex={0}
              data-cy="facebook-icon"
            />
          </div>

          <div className={`${blockName}__social`} key="icon-instagram-wrapper">
            <InstagramIcon
              className={`${blockName}__content-element ${blockName}__social-icon`}
              onMouseDown={() => handleSocialOnMouseDown('https://www.instagram.com/')}
              role="link"
              tabIndex={0}
              data-cy="instagram-icon"
            />
          </div>

          <div className={`${blockName}__social`} key="youtube-icon-wrapper">
            <YouTubeIcon
              className={`${blockName}__content-element ${blockName}__social-icon`}
              onMouseDown={() => handleSocialOnMouseDown('https://www.youtube.com/')}
              role="link"
              tabIndex={0}
              data-cy="youtube-icon"
            />
          </div>

          <div className={`${blockName}__social`} key="icon-twitter-wrapper">
            <TwitterIcon
              className={`${blockName}__content-element ${blockName}__social-icon`}
              onMouseDown={() => handleSocialOnMouseDown('https://x.com/?lang=en')}
              role="link"
              tabIndex={0}
              data-cy="twitter-icon"
            />
          </div>
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
