import regexps from 'data/regexps.js';
import { validateByRegexp, areTheSame } from 'utils/helpers.js';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.js';
import AvatarsGenerator from 'services/users/avatarsGenerator.js';

export const generateTooltipHeaderText = ({ index, selectedAvatar }) => selectedAvatar === index
  ? 'Główny avatar'
  : 'Oznacz jako główny avatar';

export const generateTooltipSecondaryText = ({ index, selectedAvatar }) => selectedAvatar === index
  ? 'Główny avatar jest wyświetlany jako zdjęcie profiowe'
  : 'Główny avatar bedzie uzywany jako zdjecie profilowe.';

export const sortAvatarByMainField = (a, b) => {
  if (a.main === 'true') return 1;
  if (b.main === 'true') return -1;

  return 0;
};

export const handleMyDetailsValidation = ({ name, surname, phoneNumber, city, postalCode, street }) => {
  const isNameValid = validateByRegexp({ regexp: regexps.name, subject: name });
  const isSurnameValid = validateByRegexp({ regexp: regexps.surname, subject: surname });
  const isPhoneNumberValid = validateByRegexp({ regexp: regexps.phoneNumber, subject: phoneNumber });
  const isCityValid = validateByRegexp({ regexp: regexps.city, subject: city });
  const isPostalCodeValid = validateByRegexp({ regexp: regexps.postalCode, subject: postalCode });
  const isStreetValid = validateByRegexp({ regexp: regexps.street, subject: street });

  return {
    nameError: !isNameValid && VALIDATION_ERROR_MESSAGES.name,
    surnameError: !isSurnameValid && VALIDATION_ERROR_MESSAGES.surname,
    phoneNumberError: !isPhoneNumberValid && VALIDATION_ERROR_MESSAGES.phone,
    cityError: !isCityValid && VALIDATION_ERROR_MESSAGES.city,
    postalCodeError: !isPostalCodeValid && VALIDATION_ERROR_MESSAGES.postalCode,
    streetError: !isStreetValid && VALIDATION_ERROR_MESSAGES.street,
    validationStatus: isNameValid && isSurnameValid && isPhoneNumberValid
                      && isCityValid && isPostalCodeValid && isStreetValid
  };
};

export const handleLoginValidation = ({ email, password }) => {
  const isValidEmail = validateByRegexp({ regexp: regexps.email, subject: email });
  const isValidPassword = validateByRegexp({ regexp: regexps.password, subject: password });

  return {
    emailError: !isValidEmail && VALIDATION_ERROR_MESSAGES.email,
    passwordError: !isValidPassword && VALIDATION_ERROR_MESSAGES.password,
    validationStatus: isValidEmail && isValidPassword
  };
};

export const handleClientDetailsValidation = ({ name, surname, street, city, postalCode, email, phoneNumber }) => {
  const isNameValid = validateByRegexp({ regexp: regexps.name, subject: name });
  const isSurnameValid = validateByRegexp({ regexp: regexps.surname, subject: surname });
  const isStreetValid = validateByRegexp({ regexp: regexps.street, subject: street });
  const isCityValid = validateByRegexp({ regexp: regexps.city, subject: city });
  const isPostalCodeValid = validateByRegexp({ regexp: regexps.postalCode, subject: postalCode });
  const isEmailValid = validateByRegexp({ regexp: regexps.email, subject: email });
  const isPhoneNumberValid = validateByRegexp({ regexp: regexps.phoneNumber, subject: phoneNumber });

  return {
    nameError: !isNameValid && VALIDATION_ERROR_MESSAGES.name,
    surnameError: !isSurnameValid && VALIDATION_ERROR_MESSAGES.surname,
    streetError: !isStreetValid && VALIDATION_ERROR_MESSAGES.street,
    cityError: !isCityValid && VALIDATION_ERROR_MESSAGES.city,
    postalCodeError: !isPostalCodeValid && VALIDATION_ERROR_MESSAGES.postalCode,
    emailError: !isEmailValid && VALIDATION_ERROR_MESSAGES.email,
    phoneError: !isPhoneNumberValid && VALIDATION_ERROR_MESSAGES.phone,
    validationStatus: (
      isNameValid && isSurnameValid && isStreetValid && isCityValid
      && isPostalCodeValid && isEmailValid && isPhoneNumberValid
    )
  };
};

export const handleChangePasswordValidation = ({ password, passwordConfirmation }) => {
  const isPasswordValid = validateByRegexp({ regexp: regexps.password, subject: password });
  const arePasswordsTheSame = areTheSame({ val1: password, val2: passwordConfirmation });

  return {
    passwordError: !isPasswordValid && VALIDATION_ERROR_MESSAGES.password,
    passwordIdentityError: !arePasswordsTheSame && VALIDATION_ERROR_MESSAGES.passwordIdentity,
    validationStatus: isPasswordValid && arePasswordsTheSame
  };
};

export const handleRegisterValidation = ({ email, password, avatars }) => {
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

const validateAvatars = ({ avatars }) => {
  const allowedFileFormats = ['image/png', 'image/svg+xml', 'image/jpeg'];
  let eachAvatarsHasValidFormat = true;

  avatars.forEach(({ fileType }) => {
    const hasAllowedFormat = allowedFileFormats.includes(fileType);

    if (!hasAllowedFormat) {
      eachAvatarsHasValidFormat = false;
    }
  });

  return eachAvatarsHasValidFormat;
};

export const generateAvatars = async (files) => new AvatarsGenerator(files).call();
