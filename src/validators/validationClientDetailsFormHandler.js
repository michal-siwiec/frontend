import NameValidator from './services/nameValidator.js';
import SurnameValidator from './services/surnameValidator.js';
import StreetValidator from './services/streetValidator.js';
import CityValidator from './services/cityValidator.js';
import PostalCodeValidator from './services/postalCodeValidator.js';
import EmailValidator from './services/emailValidator.js';
import PhoneNumberValidator from './services/phoneNumberValidator.js';
import errorMessages from './dictionary/errorMessages.js';

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
      nameError: !isNameValid && errorMessages.name,
      surnameError: !isSurnameValid && errorMessages.surname,
      streetError: !isStreetValid && errorMessages.street,
      cityError: !isCityValid && errorMessages.city,
      postalCodeError: !isValidPostalCode && errorMessages.postalCode,
      emailError: !isEmailValid && errorMessages.email,
      phoneError: !isPhoneValid && errorMessages.phone,
      validationStatus: (
        isNameValid && isSurnameValid && isStreetValid && isCityValid
        && isValidPostalCode && isEmailValid && isPhoneValid
      )
    };
  }
}

export default ValidationClientDetailsFormHandler;
