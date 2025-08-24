import { Product } from 'types/product';
import { CATEGORY_NAMES } from 'data/uiElements.js';

// TODO: Update scripts inside package.json

export const generateAddedProductPayload = ({ product, selectedQuantity }: { product: Product, selectedQuantity: number }) => ({
  id: product.id,
  quantity: selectedQuantity,
  attributes: product
});

type CategoryKey = keyof typeof CATEGORY_NAMES;

export const generateHeaderCaption = ({ arePromoted, productType }: { arePromoted: boolean, productType: CategoryKey }) => {
  if (arePromoted) return 'Polecane produkty';
  if (!productType) return 'Wszystkie produkty';

  return `Produkty z kategori "${CATEGORY_NAMES[productType]}"`;
};

export const generatePossibleProductQuantity = (
  { productID, productsInBasket, availableQuantity }: { productID: string, productsInBasket: Array<Product>, availableQuantity: number }
) => {
  const productQuantityInBasket = productsInBasket.find(({ id }) => id === productID)?.quantity || 0;

  return availableQuantity - productQuantityInBasket;
};
