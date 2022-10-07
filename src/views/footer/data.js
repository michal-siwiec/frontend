import { STORAGE_URL } from 'utils/environment.js';

export const productsCategories = [
  {
    name: 'Narzędzia',
    path: '/products?type=tools'
  },
  {
    name: 'Ubiór',
    path: '/products?type=outfit'
  },
  {
    name: 'Chemia budowlana',
    path: '/products?type=constructionChemicals'
  },
  {
    name: 'Strefa ogroduę',
    path: '/products?type=gardenZone'
  },
  {
    name: 'Strefa dachu',
    path: '/products?type=roofZone'
  },
  {
    name: 'Stfera wnętrza',
    path: '/products?type=interiorZone'
  },
  {
    name: 'Strefa ściany',
    path: '/products?type=wallZone'
  },
  {
    name: 'Strefa fundamentu',
    path: '/products?type=foundationZone'
  }
];

export const privacyPolicy = {
  outputName: 'polityka_prywatności.pdf',
  url: `${STORAGE_URL}/documents/regulamin_sklepu.pdf`
};

export const shopRules = {
  outputName: 'regulamin_sklepu.pdf',
  url: `${STORAGE_URL}/documents/polityka_prywatnosci.pdf`
};

export const socials = [
  {
    iconClass: 'icon-facebook',
    url: 'https://www.facebook.com/'
  },
  {
    iconClass: 'icon-instagram',
    url: 'https://www.instagram.com/'
  },
  {
    iconClass: 'icon-youtube',
    url: 'https://www.youtube.com/'
  },
  {
    iconClass: 'icon-twitter',
    url: 'https://twitter.com/?lang=pl'
  },
  {
    iconClass: 'icon-tiktok',
    url: 'https://www.tiktok.com/pl-PL/'
  }
];

export const shopMail = 'siwiec.michal724@gmail.com';
export const shopPhone = '724131140';

/* eslint-disable max-len */
export const shopRulesText = `
Regulamin sklepu internetowego to zbiór zasad i norm, regulujących procesy związane z dokonywanymi na stronie sklepu transakcjami. Również w regulaminie znajdziemy informację określające zasady komunikacji sklepu z klientem oraz odwrotnej możliwości. Często są tu zawarte również informacje o przesyłkach i płatnościach.
`;

export const privacyPolicyText = `
Polityka prywatności – dokument umieszczany na witrynie internetowej w celu poinformowania użytkowników o tym, jakie dane osobowe są o nich zbierane i jak będą wykorzystywane.
`;
/* eslint-enable max-len */
