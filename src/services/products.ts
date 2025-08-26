import { Product, Products } from 'types/product';
import { CATEGORY_NAMES } from 'data/uiElements';

// TODO: Update scripts inside package.json to match to ts files

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
  { productID, productsInBasket, availableQuantity }: { productID: string, productsInBasket: Products, availableQuantity: number }
) => {
  const productQuantityInBasket = productsInBasket.find(({ id }) => id === productID)?.quantity || 0;

  return availableQuantity - productQuantityInBasket;
};
