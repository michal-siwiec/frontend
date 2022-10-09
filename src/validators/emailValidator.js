class EmailValidator {
  #email;
  #emailRegex;

  constructor(email) {
    this.#email = email;
    this.#emailRegex = /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
  }

  valid() {
    return this.#isEmailMatchToRegex();
  }

  #isEmailMatchToRegex() {
    return this.#emailRegex.test(this.#email);
  }
}

export default EmailValidator;
