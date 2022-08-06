import PasswordValidator from './services/passwordValidator.js';
import EmailValidator from './services/emailValidator.js';
import AvatarValidator from './services/avatarValidator.js';

class ValidationRegisterFormHandler {
  #passwordValidator;
  #emailValidator;
  #avatarValidator;

  constructor({ password, email, avatars }) {
    this.#passwordValidator = new PasswordValidator(password);
    this.#emailValidator = new EmailValidator(email);
    this.#avatarValidator = new AvatarValidator(avatars);
  }

  call() {
    return this.#isEmailValid() && this.#isPasswordValid() && this.#isAvatarValid();
  }

  #isEmailValid() {
    return this.#emailValidator.valid();
  }

  #isPasswordValid() {
    return this.#passwordValidator.valid();
  }

  #isAvatarValid() {
    this.#avatarValidator.valid();
  }
}

export default ValidationRegisterFormHandler;
