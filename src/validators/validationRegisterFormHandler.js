import PasswordValidator from './services/passwordValidator.js';
import EmailValidator from './services/emailValidator.js';
import AvatarValidator from './services/avatarValidator.js';
import errorMessages from './dictionary/errorMessages.js';

class ValidationRegisterFormHandler {
  #passwordValidator;
  #emailValidator;
  #avatarValidator;

  constructor({ email, password, avatars }) {
    this.#emailValidator = new EmailValidator(email);
    this.#passwordValidator = new PasswordValidator(password);
    this.#avatarValidator = new AvatarValidator(avatars);
  }

  call() {
    return this.#response();
  }

  #response() {
    const isEmailValid = this.#emailValidator.valid();
    const isPasswordValid = this.#passwordValidator.valid();
    const isAvatarValid = this.#avatarValidator.valid();

    return {
      emailError: !isEmailValid && errorMessages.email,
      passwordError: !isPasswordValid && errorMessages.password,
      avatarError: !isAvatarValid && errorMessages.avatar,
      validationStatus: isEmailValid && isPasswordValid && isAvatarValid
    };
  }
}

export default ValidationRegisterFormHandler;
