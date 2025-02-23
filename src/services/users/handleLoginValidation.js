import regexps from 'data/regexps.js';
import { validateByRegexp } from 'utils/helpers.js';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.js';

const handleLoginValidation = ({ email, password }) => {
  const isValidEmail = validateByRegexp({ regexp: regexps.email, subject: email });
  const isValidPassword = validateByRegexp({ regexp: regexps.password, subject: password });

  return {
    emailError: !isValidEmail && VALIDATION_ERROR_MESSAGES.email,
    passwordError: !isValidPassword && VALIDATION_ERROR_MESSAGES.password,
    validationStatus: isValidEmail && isValidPassword
  };
};

export default handleLoginValidation;
