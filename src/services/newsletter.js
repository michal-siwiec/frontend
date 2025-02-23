import regexps from 'data/regexps.js';
import { validateByRegexp } from 'utils/helpers.js';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.js';

export const handleSaveToNewsletterValidation = ({ name, surname, email }) => {
  const isNameValid = validateByRegexp({ regexp: regexps.name, subject: name });
  const isSurnameValid = validateByRegexp({ regexp: regexps.surname, subject: surname });
  const isEmailValid = validateByRegexp({ regexp: regexps.email, subject: email });

  return {
    nameError: !isNameValid && VALIDATION_ERROR_MESSAGES.name,
    surnameError: !isSurnameValid && VALIDATION_ERROR_MESSAGES.surname,
    emailError: !isEmailValid && VALIDATION_ERROR_MESSAGES.email,
    validationStatus: isNameValid && isSurnameValid && isEmailValid
  };
};

