import NameValidator from './services/nameValidator.js';
import SurnameValidator from './services/surnameValidator.js';
import EmailValidator from './services/emailValidator.js';

class ValidationNewsletterFormHandler {
  #name;
  #surname;
  #email;

  constructor({ name, surname, email }) {
    this.#name = name;
    this.#surname = surname;
    this.#email = email;
  }

  call() {
    return this.#isNameValid() && this.#isSurnameValid() && this.#isEmailValid();
  }

  #isNameValid() {
    return new NameValidator(this.#name).valid();
  }

  #isSurnameValid() {
    return new SurnameValidator(this.#surname).valid();
  }

  #isEmailValid() {
    return new EmailValidator(this.#email).valid();
  }
}

export default ValidationNewsletterFormHandler;
