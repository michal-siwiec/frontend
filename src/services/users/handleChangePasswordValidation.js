import validateByRegexp from 'services/validations/validateByRegexp.js';
import validatePasswordEquality from 'services/validations/validatePasswordEquality.js';
import formRegexp from 'data/formRegexp.js';
import validationErrors from 'data/validationErrors.js';

const handleChangePasswordValidation = ({ password, passwordConfirmation }) => {
  const isPasswordValid = validateByRegexp({ regexp: formRegexp.password, subject: password });
  const arePasswordsTheSame = validatePasswordEquality({ password, passwordConfirmation });

  return {
    passwordError: !isPasswordValid && validationErrors.password,
    passwordIdentityError: !arePasswordsTheSame && validationErrors.passwordIdentity,
    validationStatus: isPasswordValid && arePasswordsTheSame
  };
};

export default handleChangePasswordValidation;
