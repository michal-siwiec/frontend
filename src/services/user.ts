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

export const handleMyDetailsValidation = (name: string, surname: string, phoneNumber: string, city: string, postalCode: string, street: string) => {
  const isNameValid = validateByRegexp(NAME_REGEX, name);
  const isSurnameValid = validateByRegexp(SURNAME_REGEX, surname);
  const isPhoneNumberValid = validateByRegexp(PHONE_NUMBER_REGEX, phoneNumber);
  const isCityValid = validateByRegexp(CITY_REGEX, city);
  const isPostalCodeValid = validateByRegexp(POSTAL_CODE_REGEX, postalCode);
  const isStreetValid = validateByRegexp(STREET_REGEX, street);

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
  const isValidEmail = validateByRegexp(EMAIL_REGEX, email);
  const isValidPassword = validateByRegexp(PASSWORD_REGEX, password);

  return {
    emailError: !isValidEmail && VALIDATION_ERROR_MESSAGES.email,
    passwordError: !isValidPassword && VALIDATION_ERROR_MESSAGES.password,
    validationStatus: isValidEmail && isValidPassword
  };
};

export const handleClientDetailsValidation = (name: string, surname: string, street: string, city: string, postalCode: string, email: string, phoneNumber: string) => {
  const isNameValid = validateByRegexp(NAME_REGEX, name);
  const isSurnameValid = validateByRegexp(SURNAME_REGEX, surname);
  const isStreetValid = validateByRegexp(STREET_REGEX, street);
  const isCityValid = validateByRegexp(CITY_REGEX, city);
  const isPostalCodeValid = validateByRegexp(POSTAL_CODE_REGEX, postalCode);
  const isEmailValid = validateByRegexp(EMAIL_REGEX, email);
  const isPhoneNumberValid = validateByRegexp(PHONE_NUMBER_REGEX, phoneNumber);

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
  const isPasswordValid = validateByRegexp(PASSWORD_REGEX, password);
  const arePasswordsTheSame = areTheSame(password, passwordConfirmation);

  return {
    passwordError: !isPasswordValid && VALIDATION_ERROR_MESSAGES.password,
    passwordIdentityError: !arePasswordsTheSame && VALIDATION_ERROR_MESSAGES.passwordIdentity,
    validationStatus: isPasswordValid && arePasswordsTheSame
  };
};

export const handleRegisterValidation = (email: string, password: string, avatars: Avatars) => {
  const isEmailValid = validateByRegexp(EMAIL_REGEX, email);
  const isPasswordValid = validateByRegexp(PASSWORD_REGEX, password);
  const areAvatarsValid = validateAvatars(avatars);

  return {
    emailError: !isEmailValid && VALIDATION_ERROR_MESSAGES.email,
    passwordError: !isPasswordValid && VALIDATION_ERROR_MESSAGES.password,
    avatarError: !areAvatarsValid && VALIDATION_ERROR_MESSAGES.avatar,
    validationStatus: isEmailValid && isPasswordValid && areAvatarsValid
  };
};

const validateAvatars = (avatars: Avatars ) => {
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
