export const formattedPrice = (price) => price.toString().replace('.', ',');

export const countTotalPrice = (products) => {
  const initialValue = 0;
  return products.reduce((prev, { quantity, attributes: { price } }) => (quantity * price) + prev, initialValue);
};
