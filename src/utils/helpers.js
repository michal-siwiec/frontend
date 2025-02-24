import isEmpty from 'lodash';

export const countTotalPrice = (products) => {
  const initialValue = 0;

  return products.reduce((prev, { quantity, attributes: { price } }) => (
    (quantity * price) + prev
  ), initialValue).toFixed(2);
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

export const scrollIntoElement = ({ elementSelector, scrollProperties_ }) => {
  const defaultScrollProperties = { behavior: 'smooth', block: 'start' };
  const scrollProperties = isEmpty(scrollProperties_) ? defaultScrollProperties : scrollProperties_;

  document.querySelector(elementSelector).scrollIntoView(scrollProperties);
};

export const formattedPrice = (price) => price.toFixed(2).toString().replace('.', ',');
export const isTextLonger = ({ string, charsQuantity }) => string.length > charsQuantity;
export const formatTimestamp = (timeStamp) => new Date(timeStamp).toLocaleString();
export const validateByRegexp = ({ regexp, subject }) => regexp.test(subject);
export const areTheSame = ({ val1, val2 }) => val1 === val2;
