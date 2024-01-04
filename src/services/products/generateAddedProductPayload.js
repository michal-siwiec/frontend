const generateAddedProductPayload = ({ product, selectedQuantity }) => {
  const numberSystem = 10;

  return {
    id: product.id,
    quantity: parseInt(selectedQuantity, numberSystem),
    attributes: product
  };
};

export default generateAddedProductPayload;
