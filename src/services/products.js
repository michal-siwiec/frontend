import { CATEGORY_NAMES } from 'data/uiElements.js';

export const generateAddedProductPayload = ({ product, selectedQuantity }) => {
  const NUMBER_SYSTEM = 10;

  return {
    id: product.id,
    quantity: parseInt(selectedQuantity, NUMBER_SYSTEM),
    attributes: product
  };
};

export const generateHeaderCaption = ({ arePromoted, productType }) => {
  if (arePromoted) return 'Polecane produkty';
  if (!productType) return 'Wszystkie produkty';

  return `Produkty z kategori "${CATEGORY_NAMES[productType]}"`;
};

export const generatePossibleProductQuantity = ({ productID, productsInBasket, availableQuantity }) => {
  const productQuantityInBasket = productsInBasket.find(({ id }) => id === productID)?.quantity || 0;

  return availableQuantity - productQuantityInBasket;
};
