const generatePossibleProductQuantity = ({ productID, productsInBasket, availableQuantity }) => {
  const productQuantityInBasket = productsInBasket.find(({ id }) => id === productID)?.quantity || 0;

  return availableQuantity - productQuantityInBasket;
};

export default generatePossibleProductQuantity;
