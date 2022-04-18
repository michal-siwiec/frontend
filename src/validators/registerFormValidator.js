/* eslint max-len: 0 */

import PasswordValidator from './passwordValidator';
import EmailValidator from './emailValidator';
import AvatarValidator from './avatarValidator';

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
