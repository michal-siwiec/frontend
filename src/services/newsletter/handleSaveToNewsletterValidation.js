import validateByRegexp from 'services/validations/validateByRegexp.js';
import formRegepx from 'data/formRegexp.js';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.js';

const handleSaveToNewsletterValidation = ({ name, surname, email }) => {
  const isNameValid = validateByRegexp({ regexp: formRegepx.name, subject: name });
  const isSurnameValid = validateByRegexp({ regexp: formRegepx.surname, subject: surname });
  const isEmailValid = validateByRegexp({ regexp: formRegepx.email, subject: email });

  return {
    nameError: !isNameValid && VALIDATION_ERROR_MESSAGES.name,
    surnameError: !isSurnameValid && VALIDATION_ERROR_MESSAGES.surname,
    emailError: !isEmailValid && VALIDATION_ERROR_MESSAGES.email,
    validationStatus: isNameValid && isSurnameValid && isEmailValid
  };
};

export default handleSaveToNewsletterValidation;
