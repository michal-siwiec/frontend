import OpinionValidator from 'validators/opinionValidator.js';
import validationErrors from 'dictionaries/validationErrors.js';

class ValidationAddOpinionHandler {
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
      opinionError: !isOpinionValid && validationErrors.opinion,
      validationStatus: isOpinionValid
    };
  }
}

export default ValidationAddOpinionHandler;
