import EmailValidator from './services/emailValidator.js';
import PasswordValidator from './services/passwordValidator.js';
import validationErrors from 'dictionaries/validationErrors.js';

class ValidationLoginFormHandler {
  #emailValidator;
  #passwordValidator;

  constructor({ email, password }) {
    this.#emailValidator = new EmailValidator(email);
    this.#passwordValidator = new PasswordValidator(password);
  }

  call() {
    return this.#response();
  }

  #response() {
    const isValidEmail = this.#emailValidator.valid();
    const isValidPassword = this.#passwordValidator.valid();

    return {
      emailError: !isValidEmail && validationErrors.email,
      passwordError: !isValidPassword && validationErrors.password,
      validationStatus: isValidEmail && isValidPassword
    };
  }
}

export default ValidationLoginFormHandler;
