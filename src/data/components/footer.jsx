import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faEnvelope,
  faClock,
  faMap,
} from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

export const contactInfo = [
  {
    icon: <FontAwesomeIcon icon={faPhone} />,
    header: 'ADDRESS',
    value: '123 Street Name, City, England'
  },
  {
    icon: <FontAwesomeIcon icon={faMap} />,
    header: 'PHONE',
    value: '+48724131140'
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    header: 'EMAIL',
    value: 'siwiec.michal724@gmail.com'
  },
  {
    icon: <FontAwesomeIcon icon={faClock} />,
    header: 'WORKING DAYS/HOURS',
    value: 'Mon - Sun / 9:00AM - 8:00:PM'
  }
];

export const myAccountInfo = [
  { label: 'About us' },
  { label: 'Contact us' },
  { label: 'My account' },
  { label: 'Order history' },
  { label: 'Advanced search' }
]

export const mainFeaturesInfo = [
  { label: 'Super fast Magnetho Theme' },
  { label: '1st Fully working Ajax Theme' },
  { label: '20 uniqeHompage layouts' },
  { label: 'Powerfull admin panel' },
  { label: 'Mobile & Retina Optimized ' }
];

export const paymentOptionsInfo = [
  {
    src: 'https://olx-development.s3.eu-central-1.amazonaws.com/discover-logo.png',
    alt: 'discover-logo'
  },
  {
    src: 'https://olx-development.s3.eu-central-1.amazonaws.com/maestro-logo.png',
    alt: 'maestro-logo'
  },
  {
    src: 'https://olx-development.s3.eu-central-1.amazonaws.com/paypal-logo.png',
    alt: 'paypal-logo'
  },
  {
    src: 'https://olx-development.s3.eu-central-1.amazonaws.com/visa-logo.webp',
    alt: 'visa-logo'
  }
];

export const socialMediaInfo = [
  { icon: <FontAwesomeIcon icon={faFacebook} className="footer__icon" /> },
  { icon: <FontAwesomeIcon icon={faTwitter} className="footer__icon" /> },
  { icon: <FontAwesomeIcon icon={faInstagram} className="footer__icon" /> },
];
