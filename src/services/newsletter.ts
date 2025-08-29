import { NAME_REGEX, SURNAME_REGEX, EMAIL_REGEX } from 'data/regexps';
import { validateByRegexp } from 'utils/helpers';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors';

export const handleSaveToNewsletterValidation = (name: string, surname: string, email: string) => {
  const isNameValid = validateByRegexp(NAME_REGEX, name);
  const isSurnameValid = validateByRegexp(SURNAME_REGEX, surname);
  const isEmailValid = validateByRegexp(EMAIL_REGEX, email);

  return {
    nameError: !isNameValid ? VALIDATION_ERROR_MESSAGES.name : '',
    surnameError: !isSurnameValid ? VALIDATION_ERROR_MESSAGES.surname : '',
    emailError: !isEmailValid ? VALIDATION_ERROR_MESSAGES.email : '',
    validationStatus: isNameValid && isSurnameValid && isEmailValid
  };
};
