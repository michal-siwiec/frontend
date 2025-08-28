import { Products } from 'types/product';

export const countTotalPrice = (products: Products) => {
  const initialValue = 0;

  return products.reduce((prev, { quantity, attributes: { price } }) => (
    (quantity * price) + prev
  ), initialValue).toFixed(2);
};

export const formatPhoneNumber = (phoneNumber: string) => {
  const phoneNumberToArray = phoneNumber.split('');
  const initialValue = '';

  return phoneNumberToArray.reduce((prev, next, index) => {
    const isSpaceNeeded = index !== 0 && index % 3 === 0;
    const separator = isSpaceNeeded ? ' ' : '';

    return `${prev}${separator}${next}`;
  }, initialValue);
};

export const cutAfterNChars = (text: string, charsQuantity: number) => {
  const stringLength = text.length;
  const narrowContent = text.slice(0, charsQuantity);
  const restOfContent = text.slice(charsQuantity, stringLength);

  return { narrowContent, restOfContent };
};

export const scrollIntoElement = ({ elementSelector }: { elementSelector: string }) => {
  const htmlElement = document.querySelector(elementSelector);

  if (htmlElement) {
    htmlElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const formatPrice = (price: number) => price.toFixed(2).toString().replace('.', ',');
export const isTextLonger = ({ text, charsQuantity }: { text: string, charsQuantity: number }) => text.length > charsQuantity;
export const formatTimestamp = (timeStamp: Date) => new Date(timeStamp).toLocaleString();
export const validateByRegexp = ({ regexp, subject }: { regexp: RegExp, subject: string }) => regexp.test(subject);
export const areTheSame = ({ val1, val2 }: { val1: string, val2: string }) => val1 === val2;
