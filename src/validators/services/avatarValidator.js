class AvatarValidator {
  #avatars;
  #allowedFileFormats;

  constructor(avatars) {
    this.#avatars = avatars;
    this.#allowedFileFormats = ['image/png', 'image/svg+xml'];
  }

  valid() {
    return this.#isValidFormat();
  }

  #isValidFormat() {
    let eachAvatarsHasValidFormat = true;

    this.#avatars.forEach(({ fileType }) => {
      const hasAllowedFormat = this.#allowedFileFormats.includes(fileType);

      if (!hasAllowedFormat) {
        eachAvatarsHasValidFormat = false;
      }
    });

    return eachAvatarsHasValidFormat;
  }
}

export default AvatarValidator;
