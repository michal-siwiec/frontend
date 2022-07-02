export const addProduct = ({ addedProducts, payload }) => {
  const isProductAlreadyAdded = !!(addedProducts.find(({ id }) => id === payload.id));

  if (isProductAlreadyAdded) {
    const product = addedProducts.find(product => product.id === payload.id);
    product.quantity += payload.quantity;
  } else {
    addedProducts.push(payload);
  }
};
