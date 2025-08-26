import regexps from 'data/regexps';
import { validateByRegexp } from 'utils/helpers';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors';

export const handleSaveToNewsletterValidation = ({ name, surname, email }: { name: string, surname: string, email: string }) => {
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
