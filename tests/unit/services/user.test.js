import {
  generateTooltipHeaderText,
  generateTooltipSecondaryText,
  sortAvatarByMainField,
  handleMyDetailsValidation,
  handleLoginValidation,
  handleClientDetailsValidation,
  handleChangePasswordValidation,
  handleRegisterValidation,
  generateAvatars
} from 'services/user.ts';

import AvatarsGenerator from 'services/users/avatarsGenerator.ts';

describe('generateTooltipHeaderText', () => {
  it('returns main avatar label', () => {
    const response = generateTooltipHeaderText({ index: 0, selectedAvatar: 0 });

    expect(response).toBe('Główny avatar');
  });

  it('returns mark as main avatar label', () => {
    const response = generateTooltipHeaderText({ index: 0, selectedAvatar: 1 });

    expect(response).toBe('Oznacz jako główny avatar');
  });
});

describe('generateTooltipSecondaryText', () => {
  it('returns is displayed as main avatar label', () => {
    const response = generateTooltipSecondaryText({ index: 0, selectedAvatar: 0 });

    expect(response).toBe('Główny avatar jest wyświetlany jako zdjęcie profiowe');
  });

  it('returns will be displayed as main avatar label', () => {
    const response = generateTooltipSecondaryText({ index: 0, selectedAvatar: 1 });

    expect(response).toBe('Główny avatar bedzie uzywany jako zdjecie profilowe.');
  });
});

describe('sortAvatarByMainField', () => {
  it('should return 1 if a.main is "true" and b.main is not "true"', () => {
    const a = { main: 'true' };
    const b = { main: 'false' };
    const response = sortAvatarByMainField(a, b);

    expect(response).toBe(1);
  });

  it('should return -1 if b.main is "true" and a.main is not "true"', () => {
    const a = { main: 'false' };
    const b = { main: 'true' };
    const response = sortAvatarByMainField(a, b);

    expect(response).toBe(-1);
  });

  it('should return 0 if both a.main and b.main are "true"', () => {
    const a = { main: 'true' };
    const b = { main: 'true' };
    const response = sortAvatarByMainField(a, b);

    expect(response).toBe(1);
  });

  it('should return 0 if neither a.main nor b.main are "true"', () => {
    const a = { main: 'false' };
    const b = { main: 'false' };
    const response = sortAvatarByMainField(a, b);

    expect(response).toBe(0);
  });
});

describe('handleMyDetailsValidation', () => {
  let name;
  let surname;
  let phoneNumber;
  let city;
  let postalCode;
  let street;

  beforeEach(() => {
    name = 'Michal';
    surname = 'Siwiec';
    phoneNumber = '724131140';
    city = 'Gliwice';
    postalCode = '44-100';
    street = 'Beskidzka';
  });

  it('returns proper error status if name is not correct', () => {
    name = 'H$#$%627y1';
    const response = handleMyDetailsValidation(name, surname, phoneNumber, city, postalCode, street);

    expect(response).toEqual({
      nameError: 'Imię ma niepoprawny format!',
      surnameError: false,
      phoneNumberError: false,
      cityError: false,
      postalCodeError: false,
      streetError: false,
      validationStatus: false
    });
  });

  it('returns proper error status if surname is not correct', () => {
    surname = 'H$#$%627y1';
    const response = handleMyDetailsValidation(name, surname, phoneNumber, city, postalCode, street);

    expect(response).toEqual({
      nameError: false,
      surnameError: 'Nazwisko ma niepoprawny format!',
      phoneNumberError: false,
      cityError: false,
      postalCodeError: false,
      streetError: false,
      validationStatus: false
    });
  });

  it('returns proper error status if phone number is not correct', () => {
    phoneNumber = '7241311400';
    const response = handleMyDetailsValidation(name, surname, phoneNumber, city, postalCode, street);

    expect(response).toEqual({
      nameError: false,
      surnameError: false,
      phoneNumberError: 'Telefon ma niepoprawny format!',
      cityError: false,
      postalCodeError: false,
      streetError: false,
      validationStatus: false
    });
  });

  it('returns proper error status if city is not correct', () => {
    city = '*86hnmaknx';
    const response = handleMyDetailsValidation(name, surname, phoneNumber, city, postalCode, street);

    expect(response).toEqual({
      nameError: false,
      surnameError: false,
      phoneNumberError: false,
      cityError: 'Miasto ma niepoprawny format!',
      postalCodeError: false,
      streetError: false,
      validationStatus: false
    });
  });

  it('returns proper error status if postal code is not correct', () => {
    postalCode = '400100';
    const response = handleMyDetailsValidation(name, surname, phoneNumber, city, postalCode, street);

    expect(response).toEqual({
      nameError: false,
      surnameError: false,
      phoneNumberError: false,
      cityError: false,
      postalCodeError: 'Kod pocztowy ma niepoprawny format!',
      streetError: false,
      validationStatus: false
    });
  });

  it('returns proper error status if street is not correct', () => {
    street = '8898671%#$';
    const response = handleMyDetailsValidation(name, surname, phoneNumber, city, postalCode, street);

    expect(response).toEqual({
      nameError: false,
      surnameError: false,
      phoneNumberError: false,
      cityError: false,
      postalCodeError: false,
      streetError: 'Ulica ma niepoprawny format!',
      validationStatus: false
    });
  });

  it('returns multiple error messages', () => {
    name = '8898671%#$';
    street = '8898671%#$';
    const response = handleMyDetailsValidation(name, surname, phoneNumber, city, postalCode, street);

    expect(response).toEqual({
      nameError: 'Imię ma niepoprawny format!',
      surnameError: false,
      phoneNumberError: false,
      cityError: false,
      postalCodeError: false,
      streetError: 'Ulica ma niepoprawny format!',
      validationStatus: false
    });
  });

  it('not return error status if each field has proper value', () => {
    const response = handleMyDetailsValidation(name, surname, phoneNumber, city, postalCode, street);

    expect(response).toEqual({
      nameError: false,
      surnameError: false,
      phoneNumberError: false,
      cityError: false,
      postalCodeError: false,
      streetError: false,
      validationStatus: true
    });
  });
});

describe('handleLoginValidation', () => {
  let email;
  let password;

  beforeEach(() => {
    email = 'siwiec.michal724@gmial.com';
    password = 'Qwerty12';
  });

  it('returns proper error status if email is not valid', () => {
    email = 'siwiec.michal72gmial.com';
    const response = handleLoginValidation(email, password);

    expect(response).toEqual({
      emailError: 'Email ma niepoprawny format!',
      passwordError: false,
      validationStatus: false
    });
  });

  it('returns proper error status if password is not valid', () => {
    password = 'qwe';
    const response = handleLoginValidation(email, password);

    expect(response).toEqual({
      emailError: false,
      passwordError: 'Hasło powinno mieć minimum 8 znaków, zawierać małą i dużą literę oraz cyfrę!',
      validationStatus: false
    });
  });

  it('returns multiple error messages', () => {
    email = 'siwiec.michal724gmail.com';
    password = 'qwer';
    const response = handleLoginValidation(email, password);

    expect(response).toEqual({
      emailError: 'Email ma niepoprawny format!',
      passwordError: 'Hasło powinno mieć minimum 8 znaków, zawierać małą i dużą literę oraz cyfrę!',
      validationStatus: false
    });
  });

  it('no return error status if the both are valid', () => {
    const response = handleLoginValidation(email, password);

    expect(response).toEqual({
      emailError: false,
      passwordError: false,
      validationStatus: true
    });
  });
});

describe('handleClientDetailsValidation', () => {
  let name;
  let surname;
  let street;
  let city;
  let postalCode;
  let email;
  let phoneNumber;

  beforeEach(() => {
    name = 'Michal';
    surname = 'Siwiec';
    phoneNumber = '724131140';
    city = 'Gliwice';
    postalCode = '44-100';
    email = 'siwiec.michal724@gmail.com';
    street = 'Beskidzka';
  });

  it('returns proper error status if name is not valid', () => {
    name = 'H$#$%627y1';
    const response = handleClientDetailsValidation(name, surname, street, city, postalCode, email, phoneNumber);

    expect(response).toEqual({
      nameError: 'Imię ma niepoprawny format!',
      surnameError: false,
      streetError: false,
      cityError: false,
      postalCodeError: false,
      emailError: false,
      phoneError: false,
      validationStatus: false
    });
  });

  it('returns proper error status if surname is not valid', () => {
    surname = 'H$#$%627y1';
    const response = handleClientDetailsValidation(name, surname, street, city, postalCode, email, phoneNumber);

    expect(response).toEqual({
      nameError: false,
      surnameError: 'Nazwisko ma niepoprawny format!',
      streetError: false,
      cityError: false,
      postalCodeError: false,
      emailError: false,
      phoneError: false,
      validationStatus: false
    });
  });

  it('returns proper error status if street is not valid', () => {
    street = 'H$#$%627y1';
    const response = handleClientDetailsValidation(name, surname, street, city, postalCode, email, phoneNumber);

    expect(response).toEqual({
      nameError: false,
      surnameError: false,
      streetError: 'Ulica ma niepoprawny format!',
      cityError: false,
      postalCodeError: false,
      emailError: false,
      phoneError: false,
      validationStatus: false
    });
  });

  it('returns proper error status if city is not valid', () => {
    city = 'H$#$%627y1';
    const response = handleClientDetailsValidation(name, surname, street, city, postalCode, email, phoneNumber);

    expect(response).toEqual({
      nameError: false,
      surnameError: false,
      streetError: false,
      cityError: 'Miasto ma niepoprawny format!',
      postalCodeError: false,
      emailError: false,
      phoneError: false,
      validationStatus: false
    });
  });

  it('returns proper error status if postal code is not valid', () => {
    postalCode = 'H$#$%627y1';
    const response = handleClientDetailsValidation(name, surname, street, city, postalCode, email, phoneNumber);

    expect(response).toEqual({
      nameError: false,
      surnameError: false,
      streetError: false,
      cityError: false,
      postalCodeError: 'Kod pocztowy ma niepoprawny format!',
      emailError: false,
      phoneError: false,
      validationStatus: false
    });
  });

  it('returns proper error status if email is not valid', () => {
    email = 'siwiec.michal724gmail.com';
    const response = handleClientDetailsValidation(name, surname, street, city, postalCode, email, phoneNumber);

    expect(response).toEqual({
      nameError: false,
      surnameError: false,
      streetError: false,
      cityError: false,
      postalCodeError: false,
      emailError: 'Email ma niepoprawny format!',
      phoneError: false,
      validationStatus: false
    });
  });

  it('returns proper error status if phone number is not valid', () => {
    phoneNumber = '72413114';
    const response = handleClientDetailsValidation(name, surname, street, city, postalCode, email, phoneNumber);

    expect(response).toEqual({
      nameError: false,
      surnameError: false,
      streetError: false,
      cityError: false,
      postalCodeError: false,
      emailError: false,
      phoneError: 'Telefon ma niepoprawny format!',
      validationStatus: false
    });
  });

  it('returns multiple error messages', () => {
    phoneNumber = '72413114';
    email = 'siwiec.michal724gmail.com';
    const response = handleClientDetailsValidation(name, surname, street, city, postalCode, email, phoneNumber);

    expect(response).toEqual({
      nameError: false,
      surnameError: false,
      streetError: false,
      cityError: false,
      postalCodeError: false,
      emailError: 'Email ma niepoprawny format!',
      phoneError: 'Telefon ma niepoprawny format!',
      validationStatus: false
    });
  });

  it('not return error status if each field has proper value', () => {
    const response = handleClientDetailsValidation(name, surname, street, city, postalCode, email, phoneNumber);

    expect(response).toEqual({
      nameError: false,
      surnameError: false,
      streetError: false,
      cityError: false,
      postalCodeError: false,
      emailError: false,
      phoneError: false,
      validationStatus: true
    });
  });
});

describe('handleChangePasswordValidation', () => {
  let password;
  let passwordConfirmation;

  beforeEach(() => {
    password = 'Qwerty12';
    passwordConfirmation = 'Qwerty12';
  });

  it('returns proper error when password is not valid', () => {
    password = 'qwe';
    passwordConfirmation = 'qwe';
    const response = handleChangePasswordValidation(password, passwordConfirmation);

    expect(response).toEqual({
      passwordError: 'Hasło powinno mieć minimum 8 znaków, zawierać małą i dużą literę oraz cyfrę!',
      passwordIdentityError: false,
      validationStatus: false
    });
  });

  it('returns proper error message if passwords ae not the same', () => {
    passwordConfirmation = 'Qwerty123333';
    const response = handleChangePasswordValidation(password, passwordConfirmation);

    expect(response).toEqual({
      passwordError: false,
      passwordIdentityError: 'Hasła nie są identyczne!',
      validationStatus: false
    });
  });

  it('returns multiple error messages', () => {
    password = 'qwe';
    const response = handleChangePasswordValidation(password, passwordConfirmation);

    expect(response).toEqual({
      passwordError: 'Hasło powinno mieć minimum 8 znaków, zawierać małą i dużą literę oraz cyfrę!',
      passwordIdentityError: 'Hasła nie są identyczne!',
      validationStatus: false
    });
  });

  it('return sucess status when both passwords are correct and the same', () => {
    const response = handleChangePasswordValidation(password, passwordConfirmation);

    expect(response).toEqual({
      passwordError: false,
      passwordIdentityError: false,
      validationStatus: true
    });
  });
});

describe('handleRegisterValidation', () => {
  let email;
  let password;
  let avatars;

  beforeEach(() => {
    email = 'siwiec.michal724@gmail.com';
    password = 'Qwerty12';
    avatars = [{ fileType: 'image/png' }];
  });

  it('returns proper error response if email is not correct', () => {
    email = 'siwiec.michal724gmail.com';
    const response = handleRegisterValidation(email, password, avatars);

    expect(response).toEqual({
      emailError: 'Email ma niepoprawny format!',
      passwordError: '',
      avatarError: '',
      validationStatus: false
    });
  });

  it('returns proper error response if password is not correct', () => {
    password = 'qwe';
    const response = handleRegisterValidation(email, password, avatars);

    expect(response).toEqual({
      emailError: '',
      passwordError: 'Hasło powinno mieć minimum 8 znaków, zawierać małą i dużą literę oraz cyfrę!',
      avatarError: '',
      validationStatus: false
    });
  });

  it('returns proper error response if at least one avatar has incorrect format', () => {
    avatars = [{ fileType: 'image/jpg' }];
    const response = handleRegisterValidation(email, password, avatars);

    expect(response).toEqual({
      emailError: '',
      passwordError: '',
      avatarError: 'Dozwolone formaty to: png, svg, jpeg',
      validationStatus: false
    });
  });

  it('returns multiple error messages', () => {
    email = 'siwiec.michal724gmail.com';
    password = 'qwe';
    const response = handleRegisterValidation(email, password, avatars);

    expect(response).toEqual({
      emailError: 'Email ma niepoprawny format!',
      passwordError: 'Hasło powinno mieć minimum 8 znaków, zawierać małą i dużą literę oraz cyfrę!',
      avatarError: '',
      validationStatus: false
    });
  });

  it('returns success response if each field is valid', () => {
    const response = handleRegisterValidation(email, password, avatars);

    expect(response).toEqual({
      emailError: '',
      passwordError: '',
      avatarError: '',
      validationStatus: true
    });
  });
});

describe('generateAvatars', () => {
  const callSpy = jest.spyOn(AvatarsGenerator.prototype, 'call').mockResolvedValue('mocked-avatar-response');

  it('returns AvatarsGenerator result', async () => {
    const response = await generateAvatars(['exampleFile1.jpeg', 'exampleFile2.jpeg']);

    expect(callSpy).toHaveBeenCalledTimes(1);
    expect(response).toEqual('mocked-avatar-response');
  });
});
