import translatedCathegoriesNames from 'data/categories.js';

const generateHeaderCaption = ({ arePromoted, productType }) => {
  if (arePromoted) return 'Polecane produkty';
  if (!productType) return 'Wszystkie produkty';

  return `Produkty z kategori "${translatedCathegoriesNames[productType]}"`;
};

export default generateHeaderCaption;
