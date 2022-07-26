import store from '../../../../redux/store';

export const generateAddedProductPayload = ({ id, selectedQuantity }) => {
  const productsList = store.getState().products.list;
  const product = productsList.find(product => product.id === id);

  return {
    id,
    quantity: parseInt(selectedQuantity),
    attributes: {...product}
  };
};

export const generatePossibleProductQuantity = ({ id, addedProducts, availableQuantity }) => {
  const productQuantityInBasket = addedProducts.find(product => product.id === id)?.quantity || 0;
  return availableQuantity - productQuantityInBasket;
};
