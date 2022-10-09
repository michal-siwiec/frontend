class SurnameValidator {
  #surname;
  #surnameRegex;

  constructor(surname) {
    this.#surname = surname;
    this.#surnameRegex = /^[\w ]+$/;
  }

  valid() {
    return this.#isSurnameValid();
  }

  #isSurnameValid() {
    return this.#surnameRegex.test(this.#surname);
  }
}

export default SurnameValidator;
