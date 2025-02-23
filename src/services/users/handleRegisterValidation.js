import regexps from 'data/regexps.js';
import { validateByRegexp } from 'utils/helpers.js';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.js';
import validateAvatars from 'services/validations/validateAvatars.js';

const handleRegisterValidation = ({ email, password, avatars }) => {
  const isEmailValid = validateByRegexp({ regexp: regexps.email, subject: email });
  const isPasswordValid = validateByRegexp({ regexp: regexps.password, subject: password });
  const isAvatarValid = validateAvatars({ avatars });

  return {
    emailError: !isEmailValid && VALIDATION_ERROR_MESSAGES.email,
    passwordError: !isPasswordValid && VALIDATION_ERROR_MESSAGES.password,
    avatarError: !isAvatarValid && VALIDATION_ERROR_MESSAGES.avatar,
    validationStatus: isEmailValid && isPasswordValid && isAvatarValid
  };
};

export default handleRegisterValidation;
