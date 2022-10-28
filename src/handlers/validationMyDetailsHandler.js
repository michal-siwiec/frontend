import NameValidator from 'validators/nameValidator.js';
import SurnameValidator from 'validators/surnameValidator.js';
import PhoneNumberValidator from 'validators/phoneNumberValidator.js';
import CityValidator from 'validators/cityValidator.js';
import PostalCodeValidator from 'validators/postalCodeValidator.js';
import StreetValidator from 'validators/streetValidator.js';
import validationErrors from 'dictionaries/validationErrors.js';

class ValidationMyDetailsHandler {
  #nameValidator;
  #surnameValidator;
  #phoneNumberValidator;
  #cityValidator;
  #postalCodeValidator;
  #streetValidator;

  constructor({ name, surname, phoneNumber, city, postalCode, street }) {
    this.#nameValidator = new NameValidator(name);
    this.#surnameValidator = new SurnameValidator(surname);
    this.#phoneNumberValidator = new PhoneNumberValidator(phoneNumber);
    this.#cityValidator = new CityValidator(city);
    this.#postalCodeValidator = new PostalCodeValidator(postalCode);
    this.#streetValidator = new StreetValidator(street);
  }

  call() {
    return this.#response();
  }

  #response() {
    const isNameValid = this.#nameValidator.valid();
    const isSurnameValid = this.#surnameValidator.valid();
    const isPhoneNumberValid = this.#phoneNumberValidator.valid();
    const isCityValid = this.#cityValidator.valid();
    const isPostalCodeValid = this.#postalCodeValidator.valid();
    const isStreetValid = this.#streetValidator.valid();

    return {
      nameError: !isNameValid && validationErrors.name,
      surnameError: !isSurnameValid && validationErrors.surname,
      phoneNumberError: !isPhoneNumberValid && validationErrors.phone,
      cityError: !isCityValid && validationErrors.city,
      postalCodeError: !isPostalCodeValid && validationErrors.postalCode,
      streetError: !isStreetValid && validationErrors.street,
      validationStatus: isNameValid && isSurnameValid && isPhoneNumberValid
                        && isCityValid && isPostalCodeValid && isStreetValid
    };
  }
}

export default ValidationMyDetailsHandler;
