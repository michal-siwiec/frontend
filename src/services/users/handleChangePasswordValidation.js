import regexps from 'data/regexps.js';
import { validateByRegexp } from 'utils/helpers.js';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.js';

const handleChangePasswordValidation = ({ password, passwordConfirmation }) => {
  const isPasswordValid = validateByRegexp({ regexp: regexps.password, subject: password });
  const arePasswordsTheSame = areTheSame({ val1: password, val2: passwordConfirmation });

  return {
    passwordError: !isPasswordValid && VALIDATION_ERROR_MESSAGES.password,
    passwordIdentityError: !arePasswordsTheSame && VALIDATION_ERROR_MESSAGES.passwordIdentity,
    validationStatus: isPasswordValid && arePasswordsTheSame
  };
};

export default handleChangePasswordValidation;
