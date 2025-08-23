import { Product } from 'types/product.ts';

export const addProductToBasket = ({ addedProducts, payload }: { addedProducts: Array<Product>, payload: Product }) => {
  const productInBasket = addedProducts.find(({ id }) => id === payload.id);

  if (productInBasket) {
    productInBasket.quantity += payload.quantity;
  } else {
    addedProducts.push(payload);
  }
};
