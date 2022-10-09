import { isEmpty } from 'lodash';

class OpinionValidator {
  #opinion;

  constructor(opinion) {
    this.#opinion = opinion;
  }

  valid() {
    return this.#isOpinionValid();
  }

  #isOpinionValid() {
    return !isEmpty(this.#opinion);
  }
}

export default OpinionValidator;
