import validateByRegexp from 'services/validations/validateByRegexp.js';
import formRegexp from 'data/formRegexp.js';
import validationErrors from 'data/validationErrors.js';

const handleMyDetailsValidation = ({ name, surname, phoneNumber, city, postalCode, street }) => {
  const isNameValid = validateByRegexp({ regexp: formRegexp.name, subject: name });
  const isSurnameValid = validateByRegexp({ regexp: formRegexp.surname, subject: surname });
  const isPhoneNumberValid = validateByRegexp({ regexp: formRegexp.phoneNumber, subject: phoneNumber });
  const isCityValid = validateByRegexp({ regexp: formRegexp.city, subject: city });
  const isPostalCodeValid = validateByRegexp({ regexp: formRegexp.postalCode, subject: postalCode });
  const isStreetValid = validateByRegexp({ regexp: formRegexp.street, subject: street });

  return {
    nameError: !isNameValid && validationErrors.name,
    surnameError: !isSurnameValid && validationErrors.surname,
    phoneNumberError: !isPhoneNumberValid && validationErrors.phone,
    cityError: !isCityValid && validationErrors.city,
    postalCodeError: !isPostalCodeValid && validationErrors.postalCode,
    streetError: !isStreetValid && validationErrors.street,
    validationStatus: isNameValid && isSurnameValid && isPhoneNumberValid
                      && isCityValid && isPostalCodeValid && isStreetValid
  };
};

export default handleMyDetailsValidation;
