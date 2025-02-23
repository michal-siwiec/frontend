import regexps from 'data/regexps.js';
import { validateByRegexp } from 'utils/helpers.js';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.js';

const handleMyDetailsValidation = ({ name, surname, phoneNumber, city, postalCode, street }) => {
  const isNameValid = validateByRegexp({ regexp: regexps.name, subject: name });
  const isSurnameValid = validateByRegexp({ regexp: regexps.surname, subject: surname });
  const isPhoneNumberValid = validateByRegexp({ regexp: regexps.phoneNumber, subject: phoneNumber });
  const isCityValid = validateByRegexp({ regexp: regexps.city, subject: city });
  const isPostalCodeValid = validateByRegexp({ regexp: regexps.postalCode, subject: postalCode });
  const isStreetValid = validateByRegexp({ regexp: regexps.street, subject: street });

  return {
    nameError: !isNameValid && VALIDATION_ERROR_MESSAGES.name,
    surnameError: !isSurnameValid && VALIDATION_ERROR_MESSAGES.surname,
    phoneNumberError: !isPhoneNumberValid && VALIDATION_ERROR_MESSAGES.phone,
    cityError: !isCityValid && VALIDATION_ERROR_MESSAGES.city,
    postalCodeError: !isPostalCodeValid && VALIDATION_ERROR_MESSAGES.postalCode,
    streetError: !isStreetValid && VALIDATION_ERROR_MESSAGES.street,
    validationStatus: isNameValid && isSurnameValid && isPhoneNumberValid
                      && isCityValid && isPostalCodeValid && isStreetValid
  };
};

export default handleMyDetailsValidation;
