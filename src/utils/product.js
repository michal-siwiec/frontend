import translatedCathegoriesNames from 'dictionaries/cathegoriesNames.js';

export const generateAddedProductPayload = ({ product, selectedQuantity }) => {
  const numberSystem = 10;

  return {
    id: product.id,
    quantity: parseInt(selectedQuantity, numberSystem),
    attributes: product
  };
};

export const generatePossibleProductQuantity = ({ productID, productsInBasket, availableQuantity }) => {
  const productQuantityInBasket = productsInBasket.find(({ id }) => id === productID)?.quantity || 0;

  return availableQuantity - productQuantityInBasket;
};

export const generateHeaderCaption = ({ arePromoted, productType }) => {
  if (arePromoted) return 'Polecane produkty';
  if (!productType) return 'Wszystkie produkty';

  return `Produkty z kategori "${translatedCathegoriesNames[productType]}"`;
};
