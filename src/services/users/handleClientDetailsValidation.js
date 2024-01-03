import validateByRegexp from 'services/validations/validateByRegexp.js';
import formRegexp from 'data/formRegexp.js';
import validationErrors from 'data/validationErrors.js';

const handleClientDetailsValidation = ({ name, surname, street, city, postalCode, email, phoneNumber }) => {
  const isNameValid = validateByRegexp({ regexp: formRegexp.name, subject: name });
  const isSurnameValid = validateByRegexp({ regexp: formRegexp.surname, subject: surname });
  const isStreetValid = validateByRegexp({ regexp: formRegexp.street, subject: street });
  const isCityValid = validateByRegexp({ regexp: formRegexp.city, subject: city });
  const isPostalCodeValid = validateByRegexp({ regexp: formRegexp.postalCode, subject: postalCode });
  const isEmailValid = validateByRegexp({ regexp: formRegexp.email, subject: email });
  const isPhoneNumberValid = validateByRegexp({ regexp: formRegexp.phoneNumber, subject: phoneNumber });

  return {
    nameError: !isNameValid && validationErrors.name,
    surnameError: !isSurnameValid && validationErrors.surname,
    streetError: !isStreetValid && validationErrors.street,
    cityError: !isCityValid && validationErrors.city,
    postalCodeError: !isPostalCodeValid && validationErrors.postalCode,
    emailError: !isEmailValid && validationErrors.email,
    phoneError: !isPhoneNumberValid && validationErrors.phone,
    validationStatus: (
      isNameValid && isSurnameValid && isStreetValid && isCityValid
      && isPostalCodeValid && isEmailValid && isPhoneNumberValid
    )
  };
};

export default handleClientDetailsValidation;
