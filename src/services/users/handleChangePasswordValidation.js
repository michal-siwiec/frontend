import { validateByRegexp } from 'utils/helpers.js';
import validatePasswordEquality from 'services/validations/validatePasswordEquality.js';
import formRegexp from 'data/formRegexp.js';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.js';

const handleChangePasswordValidation = ({ password, passwordConfirmation }) => {
  const isPasswordValid = validateByRegexp({ regexp: formRegexp.password, subject: password });
  const arePasswordsTheSame = validatePasswordEquality({ password, passwordConfirmation });

  return {
    passwordError: !isPasswordValid && VALIDATION_ERROR_MESSAGES.password,
    passwordIdentityError: !arePasswordsTheSame && VALIDATION_ERROR_MESSAGES.passwordIdentity,
    validationStatus: isPasswordValid && arePasswordsTheSame
  };
};

export default handleChangePasswordValidation;
