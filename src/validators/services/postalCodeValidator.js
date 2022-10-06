class PostalCodeValidator {
  #postalCode;
  #postalCodeRegex;

  constructor(postalCode) {
    this.#postalCode = postalCode;
    this.#postalCodeRegex = /^[0-9]{2}-[0-9]{3}/;
  }

  valid() {
    return this.#isMatchToRegex();
  }

  #isMatchToRegex() {
    return this.#postalCodeRegex.test(this.#postalCode);
  }
}

export default PostalCodeValidator;
