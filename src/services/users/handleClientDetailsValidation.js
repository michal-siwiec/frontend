import { validateByRegexp } from 'utils/helpers.js';
import formRegexp from 'data/formRegexp.js';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.js';

const handleClientDetailsValidation = ({ name, surname, street, city, postalCode, email, phoneNumber }) => {
  const isNameValid = validateByRegexp({ regexp: formRegexp.name, subject: name });
  const isSurnameValid = validateByRegexp({ regexp: formRegexp.surname, subject: surname });
  const isStreetValid = validateByRegexp({ regexp: formRegexp.street, subject: street });
  const isCityValid = validateByRegexp({ regexp: formRegexp.city, subject: city });
  const isPostalCodeValid = validateByRegexp({ regexp: formRegexp.postalCode, subject: postalCode });
  const isEmailValid = validateByRegexp({ regexp: formRegexp.email, subject: email });
  const isPhoneNumberValid = validateByRegexp({ regexp: formRegexp.phoneNumber, subject: phoneNumber });

  return {
    nameError: !isNameValid && VALIDATION_ERROR_MESSAGES.name,
    surnameError: !isSurnameValid && VALIDATION_ERROR_MESSAGES.surname,
    streetError: !isStreetValid && VALIDATION_ERROR_MESSAGES.street,
    cityError: !isCityValid && VALIDATION_ERROR_MESSAGES.city,
    postalCodeError: !isPostalCodeValid && VALIDATION_ERROR_MESSAGES.postalCode,
    emailError: !isEmailValid && VALIDATION_ERROR_MESSAGES.email,
    phoneError: !isPhoneNumberValid && VALIDATION_ERROR_MESSAGES.phone,
    validationStatus: (
      isNameValid && isSurnameValid && isStreetValid && isCityValid
      && isPostalCodeValid && isEmailValid && isPhoneNumberValid
    )
  };
};

export default handleClientDetailsValidation;
