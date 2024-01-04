import validateByRegexp from 'services/validations/validateByRegexp.js';
import formRegexp from 'data/formRegexp.js';
import validationErrors from 'data/validationErrors.js';

const handleLoginValidation = ({ email, password }) => {
  const isValidEmail = validateByRegexp({ regexp: formRegexp.email, subject: email });
  const isValidPassword = validateByRegexp({ regexp: formRegexp.password, subject: password });

  return {
    emailError: !isValidEmail && validationErrors.email,
    passwordError: !isValidPassword && validationErrors.password,
    validationStatus: isValidEmail && isValidPassword
  };
};

export default handleLoginValidation;
