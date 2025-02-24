import { isEmpty } from 'lodash';

export const addProductToBasket = ({ addedProducts, payload }) => {
  const { id: productID, quantity } = payload;
  const productInBasket = addedProducts.find(({ id }) => id === productID);
  const isProductAlreadyAddedToBasket = !isEmpty(productInBasket);

  if (isProductAlreadyAddedToBasket) productInBasket.quantity += quantity;
  else addedProducts.push(payload);
};
