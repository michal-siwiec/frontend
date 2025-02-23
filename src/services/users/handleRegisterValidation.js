import validateByRegexp from 'services/validations/validateByRegexp.js';
import validateAvatars from 'services/validations/validateAvatars.js';
import formRegexp from 'data/formRegexp.js';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.js';

const handleRegisterValidation = ({ email, password, avatars }) => {
  const isEmailValid = validateByRegexp({ regexp: formRegexp.email, subject: email });
  const isPasswordValid = validateByRegexp({ regexp: formRegexp.password, subject: password });
  const isAvatarValid = validateAvatars({ avatars });

  return {
    emailError: !isEmailValid && VALIDATION_ERROR_MESSAGES.email,
    passwordError: !isPasswordValid && VALIDATION_ERROR_MESSAGES.password,
    avatarError: !isAvatarValid && VALIDATION_ERROR_MESSAGES.avatar,
    validationStatus: isEmailValid && isPasswordValid && isAvatarValid
  };
};

export default handleRegisterValidation;
