import { isEmpty } from 'lodash'; 
import { password as passwordRegx } from '../../constants/regex';

class RegisterFormValidator {
  #password;
  #avatars;

  constructor({ password, avatars }) {
    this.#password = password;
    this.#avatars = avatars;
  }

  valid() {
    return this.#isPasswordMatchToRegex() && this.#isPictureLoaded()
  }

  #isPasswordMatchToRegex() {
    return passwordRegx.test(this.#password)
  }

  #isPictureLoaded() {
    return !isEmpty(this.#avatars);
  }
}

export default RegisterFormValidator;
