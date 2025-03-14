import { handleSaveToNewsletterValidation } from 'services/newsletter.js';

describe('handleSaveToNewsletterValidation', () => {
  let name, surname, email;

  beforeEach(() => {
    name = 'Michal';
    surname = 'Siwiec';
    email = 'siwiec.michal724@gmail.com';
  });

  it('returns false status when name is not correct', () => {
    name = '';
    const response = handleSaveToNewsletterValidation({ name, surname, email });

    expect(response).toEqual({
      nameError: 'Imię ma niepoprawny format!',
      surnameError: false,
      emailError: false,
      validationStatus: false
    });
  });

  it('returns false status when surname is not correct', () => {
    surname = '';
    const response = handleSaveToNewsletterValidation({ name, surname, email });

    expect(response).toEqual({
      nameError: false,
      surnameError: 'Nazwisko ma niepoprawny format!',
      emailError: false,
      validationStatus: false
    });
  });

  it('returns false status when email is not correct', () => {
    email = '';
    const response = handleSaveToNewsletterValidation({ name, surname, email });

    expect(response).toEqual({
      nameError: false,
      surnameError: false,
      emailError: 'Email ma niepoprawny format!',
      validationStatus: false
    });
  });

  it('returns multiple error validation messages', () => {
    name = '';
    surname = '';
    const response = handleSaveToNewsletterValidation({ name, surname, email });

    expect(response).toEqual({
      nameError: 'Imię ma niepoprawny format!',
      surnameError: 'Nazwisko ma niepoprawny format!',
      emailError: false,
      validationStatus: false
    });
  });

  it('returns true status when each value is correct', () => {
    const response = handleSaveToNewsletterValidation({ name, surname, email });

    expect(response).toEqual({
      nameError: false,
      surnameError: false,
      emailError: false,
      validationStatus: true
    });
  });
});
