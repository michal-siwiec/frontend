import { password as passwordRegx } from '../constants/regex';

class PasswordValidator {
  #password;

  constructor(password) {
    this.#password = password;
  }

  valid() {
    this.#isPasswordMatchToRegex();
  };

  #isPasswordMatchToRegex() {
    return passwordRegx.test(this.#password)
  }
}

export default PasswordValidator;
