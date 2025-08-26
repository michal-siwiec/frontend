import { Product, Products } from 'types/product';

export const addProductToBasket = ({ addedProducts, payload }: { addedProducts: Products, payload: Product }) => {
  const productInBasket = addedProducts.find(({ id }) => id === payload.id);

  if (productInBasket) {
    productInBasket.quantity += payload.quantity;
  } else {
    addedProducts.push(payload);
  }
};
