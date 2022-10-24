import PasswordValidator from 'validators/passwordValidator.js';
import validationErrors from 'dictionaries/validationErrors.js';

class ValidationChangePasswordHandler {
  #password;
  #passwordConfirmation;
  #passwordValidator;

  constructor({ password, passwordConfirmation }) {
    this.#password = password;
    this.#passwordConfirmation = passwordConfirmation;
    this.#passwordValidator = new PasswordValidator(password);
  }

  call() {
    return this.#response();
  }

  #response() {
    const isPasswordValid = this.#passwordValidator.valid();
    const arePasswordsTheSame = this.#password === this.#passwordConfirmation;

    return {
      passwordError: !isPasswordValid && validationErrors.password,
      passwordIdentityError: !arePasswordsTheSame && validationErrors.passwordIdentity,
      validationStatus: isPasswordValid && arePasswordsTheSame
    };
  }
}

export default ValidationChangePasswordHandler;
