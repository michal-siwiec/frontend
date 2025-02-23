import validateByRegexp from 'services/validations/validateByRegexp.js';
import formRegexp from 'data/formRegexp.js';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.js';

const handleMyDetailsValidation = ({ name, surname, phoneNumber, city, postalCode, street }) => {
  const isNameValid = validateByRegexp({ regexp: formRegexp.name, subject: name });
  const isSurnameValid = validateByRegexp({ regexp: formRegexp.surname, subject: surname });
  const isPhoneNumberValid = validateByRegexp({ regexp: formRegexp.phoneNumber, subject: phoneNumber });
  const isCityValid = validateByRegexp({ regexp: formRegexp.city, subject: city });
  const isPostalCodeValid = validateByRegexp({ regexp: formRegexp.postalCode, subject: postalCode });
  const isStreetValid = validateByRegexp({ regexp: formRegexp.street, subject: street });

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
