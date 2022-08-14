import OpinionValidator from './services/opinionValidator.js';
import errorMessages from './dictionary/errorMessages.js';

class ValidationLoginFormHandler {
  #opinionValidator;

  constructor(opinion) {
    this.#opinionValidator = new OpinionValidator(opinion);
  }

  call() {
    return this.#response();
  }

  #response() {
    const isOpinionValid = this.#opinionValidator.valid();

    return {
      opinionError: !isOpinionValid && errorMessages.opinion,
      validationStatus: isOpinionValid
    };
  }
}

export default ValidationLoginFormHandler;
