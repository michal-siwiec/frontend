import EmailValidator from './services/emailValidator.js';
import PasswordValidator from './services/passwordValidator.js';

class ValidationLoginFormHandler {
  #validEmail;
  #validPassword;

  constructor({ email, password }) {
    this.#validEmail = ValidationLoginFormHandler.#isEmailValid(email);
    this.#validPassword = ValidationLoginFormHandler.#isPasswordValid(password);
  }

  call() {
    return this.#response();
  }

  static #isEmailValid(email) {
    return new EmailValidator(email).valid();
  }

  static #isPasswordValid(password) {
    return new PasswordValidator(password).valid();
  }

  #response() {
    return {
      emailError: !this.#validEmail && 'Email ma niepoprawny format!',
      passwordError: !this.#validPassword && 'Hasło ma niepoprawny format!',
      validationStatus: this.#validEmail && this.#validPassword
    };
  }
}

export default ValidationLoginFormHandler;
