import { Avatars } from 'types/avatar';
import { NAME_REGEX, SURNAME_REGEX, EMAIL_REGEX, PHONE_NUMBER_REGEX, PASSWORD_REGEX, CITY_REGEX, POSTAL_CODE_REGEX, STREET_REGEX } from 'data/regexps';
import { validateByRegexp, areTheSame } from 'utils/helpers';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors';
import AvatarsGenerator from 'services/users/avatarsGenerator';

// TODO: Feature disabled so far. Fix in future
// @ts-ignore
export const generateTooltipHeaderText = ({ index, selectedAvatar }) => selectedAvatar === index
  ? 'Główny avatar'
  : 'Oznacz jako główny avatar';

// TODO: Feature disabled so far. Fix in future
// @ts-ignore
export const generateTooltipSecondaryText = ({ index, selectedAvatar }) => selectedAvatar === index
  ? 'Główny avatar jest wyświetlany jako zdjęcie profiowe'
  : 'Główny avatar bedzie uzywany jako zdjecie profilowe.';

// TODO: Feature disabled so far. Fix in future
// @ts-ignore
export const sortAvatarByMainField = (a, b) => {
  if (a.main === 'true') return 1;
  if (b.main === 'true') return -1;

  return 0;
};

export const handleMyDetailsValidation = (
  { name, surname, phoneNumber, city, postalCode, street }: { name: string, surname: string, phoneNumber: string, city: string, postalCode: string, street: string }
) => {
  const isNameValid = validateByRegexp({ regexp: NAME_REGEX, subject: name });
  const isSurnameValid = validateByRegexp({ regexp: SURNAME_REGEX, subject: surname });
  const isPhoneNumberValid = validateByRegexp({ regexp: PHONE_NUMBER_REGEX, subject: phoneNumber });
  const isCityValid = validateByRegexp({ regexp: CITY_REGEX, subject: city });
  const isPostalCodeValid = validateByRegexp({ regexp: POSTAL_CODE_REGEX, subject: postalCode });
  const isStreetValid = validateByRegexp({ regexp: STREET_REGEX, subject: street });

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

export const handleLoginValidation = (email: string, password: string) => {
  const isValidEmail = validateByRegexp({ regexp: EMAIL_REGEX, subject: email });
  const isValidPassword = validateByRegexp({ regexp: PASSWORD_REGEX, subject: password });

  return {
    emailError: !isValidEmail && VALIDATION_ERROR_MESSAGES.email,
    passwordError: !isValidPassword && VALIDATION_ERROR_MESSAGES.password,
    validationStatus: isValidEmail && isValidPassword
  };
};

export const handleClientDetailsValidation = (
  { name, surname, street, city, postalCode, email, phoneNumber }: { name: string, surname: string, street: string, city: string, postalCode: string, email: string, phoneNumber: string }
) => {
  const isNameValid = validateByRegexp({ regexp: NAME_REGEX, subject: name });
  const isSurnameValid = validateByRegexp({ regexp: SURNAME_REGEX, subject: surname });
  const isStreetValid = validateByRegexp({ regexp: STREET_REGEX, subject: street });
  const isCityValid = validateByRegexp({ regexp: CITY_REGEX, subject: city });
  const isPostalCodeValid = validateByRegexp({ regexp: POSTAL_CODE_REGEX, subject: postalCode });
  const isEmailValid = validateByRegexp({ regexp: EMAIL_REGEX, subject: email });
  const isPhoneNumberValid = validateByRegexp({ regexp: PHONE_NUMBER_REGEX, subject: phoneNumber });

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

export const handleChangePasswordValidation = (password: string, passwordConfirmation: string) => {
  const isPasswordValid = validateByRegexp({ regexp: PASSWORD_REGEX, subject: password });
  const arePasswordsTheSame = areTheSame({ val1: password, val2: passwordConfirmation });

  return {
    passwordError: !isPasswordValid && VALIDATION_ERROR_MESSAGES.password,
    passwordIdentityError: !arePasswordsTheSame && VALIDATION_ERROR_MESSAGES.passwordIdentity,
    validationStatus: isPasswordValid && arePasswordsTheSame
  };
};

export const handleRegisterValidation = (
  { email, password, avatars }: { email: string, password: string, avatars: Avatars }
) => {
  const isEmailValid = validateByRegexp({ regexp: EMAIL_REGEX, subject: email });
  const isPasswordValid = validateByRegexp({ regexp: PASSWORD_REGEX, subject: password });
  const isAvatarValid = validateAvatars({ avatars });

  return {
    emailError: !isEmailValid && VALIDATION_ERROR_MESSAGES.email,
    passwordError: !isPasswordValid && VALIDATION_ERROR_MESSAGES.password,
    avatarError: !isAvatarValid && VALIDATION_ERROR_MESSAGES.avatar,
    validationStatus: isEmailValid && isPasswordValid && isAvatarValid
  };
};

const validateAvatars = ({ avatars }: { avatars: Avatars }) => {
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

export const generateAvatars = async (files: Array<File>) => new AvatarsGenerator(files).call();
