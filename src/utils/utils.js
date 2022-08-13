export const countTotalPrice = (products) => {
  const initialValue = 0;

  return products.reduce((prev, { quantity, attributes: { price } }) => (
    (quantity * price) + prev
  ), initialValue);
};

export const formatPhoneNumber = (phoneNumber) => {
  const phoneNumberToArray = phoneNumber.split('');
  const initialValue = '';

  return phoneNumberToArray.reduce((prev, next, index) => {
    const isSpaceNeeded = index !== 0 && index % 3 === 0;
    const separator = isSpaceNeeded ? ' ' : '';

    return `${prev}${separator}${next}`;
  }, initialValue);
};

export const formattedPrice = (price) => price.toString().replace('.', ',');
export const getFirstNCharacters = ({ string, charsQuantity }) => string.slice(0, charsQuantity);
export const isTextLonger = ({ string, charsQuantity }) => string.length > charsQuantity;
