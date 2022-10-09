class CityValidator {
  #city;
  #cityRegex;

  constructor(city) {
    this.#city = city;
    this.#cityRegex = /^[\w ]+$/;
  }

  valid() {
    return this.#isCityValid();
  }

  #isCityValid() {
    return this.#cityRegex.test(this.#city);
  }
}

export default CityValidator;
