import { isEmpty } from 'lodash';

class AvatarValidator {
  #avatars;

  constructor(avatars) {
    this.#avatars = avatars;
  }

  valid() {
    return this.#isPictureLoaded();
  }

  #isPictureLoaded() {
    return !isEmpty(this.#avatars);
  }
}

export default AvatarValidator;
