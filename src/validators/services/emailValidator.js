class EmailValidator {
  #email;
  #emailRegex;

  constructor(email) {
    this.#email = email;
    this.#emailRegex = /^/;
  }

  valid() {
    return this.#isEmailMatchToRegex();
  }

  #isEmailMatchToRegex() {
    return this.#emailRegex.test(this.#email);
  }
}

export default EmailValidator;
