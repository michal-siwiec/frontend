import { NAME_REGEX, SURNAME_REGEX, EMAIL_REGEX } from 'data/regexps';
import { validateByRegexp } from 'utils/helpers';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors';

// TODO: do I need named params in TS

export const handleSaveToNewsletterValidation = ({ name, surname, email }: { name: string, surname: string, email: string }) => {
  const isNameValid = validateByRegexp({ regexp: NAME_REGEX, subject: name });
  const isSurnameValid = validateByRegexp({ regexp: SURNAME_REGEX, subject: surname });
  const isEmailValid = validateByRegexp({ regexp: EMAIL_REGEX, subject: email });

  return {
    nameError: !isNameValid && VALIDATION_ERROR_MESSAGES.name,
    surnameError: !isSurnameValid && VALIDATION_ERROR_MESSAGES.surname,
    emailError: !isEmailValid && VALIDATION_ERROR_MESSAGES.email,
    validationStatus: isNameValid && isSurnameValid && isEmailValid
  };
};
