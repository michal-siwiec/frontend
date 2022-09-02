import store from 'redux_/store.js';

export const generateAddedProductPayload = ({ id, selectedQuantity }) => {
  const numberSystem = 10;
  const productsList = store.getState().products.list;
  const product = productsList.find((product_) => product_.id === id);

  return {
    id,
    quantity: parseInt(selectedQuantity, numberSystem),
    attributes: { ...product }
  };
};

export const generatePossibleProductQuantity = ({ id, productsInBasket, availableQuantity }) => {
  const productQuantityInBasket = productsInBasket.find((product) => product.id === id)?.quantity || 0;

  return availableQuantity - productQuantityInBasket;
};
