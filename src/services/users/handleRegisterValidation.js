import validateByRegexp from 'services/validations/validateByRegexp.js';
import validateAvatars from 'services/validations/validateAvatars.js';
import formRegexp from 'data/formRegexp.js';
import validationErrors from 'data/validationErrors.js';

const handleRegisterValidation = ({ email, password, avatars }) => {
  const isEmailValid = validateByRegexp({ regexp: formRegexp.email, subject: email });
  const isPasswordValid = validateByRegexp({ regexp: formRegexp.password, subject: password });
  const isAvatarValid = validateAvatars({ avatars });

  return {
    emailError: !isEmailValid && validationErrors.email,
    passwordError: !isPasswordValid && validationErrors.password,
    avatarError: !isAvatarValid && validationErrors.avatar,
    validationStatus: isEmailValid && isPasswordValid && isAvatarValid
  };
};

export default handleRegisterValidation;
