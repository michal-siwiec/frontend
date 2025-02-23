import { CATEGORY_NAMES } from 'data/uiElements';

const generateHeaderCaption = ({ arePromoted, productType }) => {
  if (arePromoted) return 'Polecane produkty';
  if (!productType) return 'Wszystkie produkty';

  return `Produkty z kategori "${CATEGORY_NAMES[productType]}"`;
};

export default generateHeaderCaption;
