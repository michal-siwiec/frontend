import PasswordValidator from './passwordValidator.js';
import EmailValidator from './emailValidator.js';

class LoginFormValidator {
  #validEmail;
  #validPassword;

  constructor({ email, password }) {
    this.#validEmail = LoginFormValidator.#isEmailValid(email);
    this.#validPassword = LoginFormValidator.#isPasswordValid(password);
  }

  valid() {
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

export default LoginFormValidator;
