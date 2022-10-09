import NameValidator from 'validators/nameValidator.js';
import SurnameValidator from 'validators/surnameValidator.js';
import EmailValidator from 'validators/emailValidator.js';
import validationErrors from 'dictionaries/validationErrors.js';

class ValidationNewsletterHandler {
  #nameValidator;
  #surnameValidator;
  #emailValidator;

  constructor({ name, surname, email }) {
    this.#nameValidator = new NameValidator(name);
    this.#surnameValidator = new SurnameValidator(surname);
    this.#emailValidator = new EmailValidator(email);
  }

  call() {
    return this.#response();
  }

  #response() {
    const isNameValid = this.#nameValidator.valid();
    const isSurnameValid = this.#surnameValidator.valid();
    const isEmailValid = this.#emailValidator.valid();

    return {
      nameError: !isNameValid && validationErrors.name,
      surnameError: !isSurnameValid && validationErrors.surname,
      emailError: !isEmailValid && validationErrors.email,
      validationStatus: isNameValid && isSurnameValid && isEmailValid
    };
  }
}

export default ValidationNewsletterHandler;
