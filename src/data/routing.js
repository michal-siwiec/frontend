export const TOP_BAR_MENU_ROUTING = [
  { path: '/products', name: 'Produkty', dataCy: 'products-label' },
  { path: '/about', name: 'O nas', dataCy: 'about-label' },
  { path: '/opinions', name: 'Opinie', dataCy: 'opinions-label' }
];

export const FOOTER_MENU_ROUTING = [
  {
    name: 'Narzędzia',
    path: '/products?type=tools',
    dataCy: 'toolsCathegoryLabel'
  },
  {
    name: 'Chemia budowlana',
    path: '/products?type=constructionChemicals',
    dataCy: 'constructionChemicalsCathegoryLabel'
  },
  {
    name: 'Schody',
    path: '/products?type=stairway',
    dataCy: 'stairwayCathegoryLabel'
  },
  {
    name: 'Strefa dachu',
    path: '/products?type=roofZone',
    dataCy: 'roofZoneCathegoryLabel'
  },
  {
    name: 'Strefa fundamentu',
    path: '/products?type=foundationZone',
    dataCy: 'foundationZoneCathegoryLabel'
  }
];
