import { password as passwordRegx } from '../constants/regex.js';

class PasswordValidator {
  #password;

  constructor(password) {
    this.#password = password;
  }

  valid() {
    return this.#isPasswordMatchToRegex();
  }

  #isPasswordMatchToRegex() {
    return passwordRegx.test(this.#password);
  }
}

export default PasswordValidator;
