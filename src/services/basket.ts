import { ProductInBasket, ProductsInBasket } from 'types/product';

export const addProductToBasket = (addedProducts: ProductsInBasket, payload: ProductInBasket) => {
  const productInBasket = addedProducts.find(({ id }) => id === payload.id);

  if (productInBasket) {
    productInBasket.quantity += payload.quantity;
  } else {
    addedProducts.push(payload);
  }
};
