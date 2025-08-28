import { Product, Products } from 'types/product';
import { Categories } from 'types/category';
import { CATEGORY_NAMES } from 'data/uiElements';

// TODO: Update scripts inside package.json to match to ts files

export const generateAddedProductPayload = (product: Product, selectedQuantity: number) => ({
  id: product.id,
  quantity: selectedQuantity,
  attributes: product
});

export const generateHeaderCaption = (arePromoted: boolean, productType: Categories) => {
  if (arePromoted) return 'Polecane produkty';
  if (!productType) return 'Wszystkie produkty';

  return `Produkty z kategori "${CATEGORY_NAMES[productType]}"`;
};

export const generatePossibleProductQuantity = (productID: string, productsInBasket: Products , availableQuantity: number) => {
  const productQuantityInBasket = productsInBasket.find(({ id }) => id === productID)?.quantity || 0;

  return availableQuantity - productQuantityInBasket;
};
