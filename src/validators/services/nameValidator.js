class NameValidator {
  #name;
  #nameRegex;

  constructor(name) {
    this.#name = name;
    this.#nameRegex = /^[\w ]+$/;
  }

  valid() {
    return this.#isNameValid();
  }

  #isNameValid() {
    return this.#nameRegex.test(this.#name);
  }
}

export default NameValidator;
