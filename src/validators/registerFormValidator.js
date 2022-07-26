/* eslint max-len: 0 */

import PasswordValidator from './passwordValidator.js';
import EmailValidator from './emailValidator.js';
import AvatarValidator from './avatarValidator.js';

class RegisterFormValidator {
  #passwordValidator;
  #emailValidator;
  #avatarValidator;

  constructor({ password, email, avatars }) {
    this.#passwordValidator = new PasswordValidator(password);
    this.#emailValidator = new EmailValidator(email);
    this.#avatarValidator = new AvatarValidator(avatars);
  }

  valid() {
    return this.#emailValidator.valid() && this.#passwordValidator.valid() && this.#avatarValidator.valid();
  }
}

export default RegisterFormValidator;
