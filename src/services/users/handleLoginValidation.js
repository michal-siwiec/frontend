import validateByRegexp from 'services/validations/validateByRegexp.js';
import formRegexp from 'data/formRegexp.js';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.js';

const handleLoginValidation = ({ email, password }) => {
  const isValidEmail = validateByRegexp({ regexp: formRegexp.email, subject: email });
  const isValidPassword = validateByRegexp({ regexp: formRegexp.password, subject: password });

  return {
    emailError: !isValidEmail && VALIDATION_ERROR_MESSAGES.email,
    passwordError: !isValidPassword && VALIDATION_ERROR_MESSAGES.password,
    validationStatus: isValidEmail && isValidPassword
  };
};

export default handleLoginValidation;
