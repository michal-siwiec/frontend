class PasswordValidator {
  #password;
  #passwordRegex;

  constructor(password) {
    this.#password = password;
    this.#passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  }

  valid() {
    return this.#isPasswordMatchToRegex();
  }

  #isPasswordMatchToRegex() {
    return this.#passwordRegex.test(this.#password);
  }
}

export default PasswordValidator;
