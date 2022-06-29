export const generateUpdatedAddedProducts = ({ state, payload }) => {
  const isProductAlreadyAdded = !!(state.addedProducts.find(product => product.id === payload.id));

  if (isProductAlreadyAdded) {
    const product = state.addedProducts.find(product => product.id === payload.id);
    product.quantity += payload.quantity;
  } else {
    state.addedProducts.push(payload);
  }
};
