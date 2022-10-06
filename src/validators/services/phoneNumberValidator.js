class PhoneNumberValidator {
  #phoneNumber;
  #phoneNumberRegex;

  constructor(phoneNumber) {
    this.#phoneNumber = phoneNumber;
    this.#phoneNumberRegex = /^\d{9}$/;
  }

  valid() {
    return this.#isMatchToRegex();
  }

  #isMatchToRegex() {
    return this.#phoneNumberRegex.test(this.#phoneNumber);
  }
}

export default PhoneNumberValidator;
