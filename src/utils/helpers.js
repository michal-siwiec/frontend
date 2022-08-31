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

export const cutAfterNChars = ({ string, charsQuantity }) => {
  const stringLength = string.length;
  const narrowContent = string.slice(0, charsQuantity);
  const restOfContent = string.slice(charsQuantity, stringLength);

  return { narrowContent, restOfContent };
};

export const formattedPrice = (price) => price.toString().replace('.', ',');
export const isTextLonger = ({ string, charsQuantity }) => string.length > charsQuantity;
