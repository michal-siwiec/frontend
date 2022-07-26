export const formatPhoneNumber = (phoneNumber) => {
  const phoneNumberToArray = phoneNumber.split('');
  const initialValue = '';

  return phoneNumberToArray.reduce((prev, next, index) => {
    const isSpaceNeeded = index !== 0 && index % 3 === 0;
    const separator = isSpaceNeeded ? ' ' : ''; 

    return `${prev}${separator}${next}`;
  }, initialValue);
}
