import NameValidator from './services/nameValidator.js';
import SurnameValidator from './services/surnameValidator.js';
import StreetValidator from './services/streetValidator.js';
import CityValidator from './services/cityValidator.js';
import PostalCodeValidator from './services/postalCodeValidator.js';
import EmailValidator from './services/emailValidator.js';
import PhoneNumberValidator from './services/phoneNumberValidator.js';
import validationErrors from 'dictionaries/validationErrors.js';

class ValidationClientDetailsFormHandler {
  #nameValidator;
  #surnameValidator;
  #streetValidator;
  #cityValidator;
  #postalCodeValidator;
  #emailValidator;
  #phoneNumberValidator;

  constructor({
    name,
    surname,
    street,
    city,
    postalCode,
    email,
    phoneNumber
  }) {
    this.#nameValidator = new NameValidator(name);
    this.#surnameValidator = new SurnameValidator(surname);
    this.#streetValidator = new StreetValidator(street);
    this.#cityValidator = new CityValidator(city);
    this.#postalCodeValidator = new PostalCodeValidator(postalCode);
    this.#emailValidator = new EmailValidator(email);
    this.#phoneNumberValidator = new PhoneNumberValidator(phoneNumber);
  }

  call() {
    return this.#response();
  }

  #response() {
    const isNameValid = this.#nameValidator.valid();
    const isSurnameValid = this.#surnameValidator.valid();
    const isStreetValid = this.#streetValidator.valid();
    const isCityValid = this.#cityValidator.valid();
    const isValidPostalCode = this.#postalCodeValidator.valid();
    const isEmailValid = this.#emailValidator.valid();
    const isPhoneValid = this.#phoneNumberValidator.valid();

    return {
      nameError: !isNameValid && validationErrors.name,
      surnameError: !isSurnameValid && validationErrors.surname,
      streetError: !isStreetValid && validationErrors.street,
      cityError: !isCityValid && validationErrors.city,
      postalCodeError: !isValidPostalCode && validationErrors.postalCode,
      emailError: !isEmailValid && validationErrors.email,
      phoneError: !isPhoneValid && validationErrors.phone,
      validationStatus: (
        isNameValid && isSurnameValid && isStreetValid && isCityValid
        && isValidPostalCode && isEmailValid && isPhoneValid
      )
    };
  }
}

export default ValidationClientDetailsFormHandler;
