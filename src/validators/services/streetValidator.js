class StreetValidator {
  #street;
  #streetRegex;

  constructor(street) {
    this.#street = street;
    this.#streetRegex = /^[\w ]+$/;
  }

  valid() {
    return this.#isStreetValid();
  }

  #isStreetValid() {
    return this.#streetRegex.test(this.#street);
  }
}

export default StreetValidator;
