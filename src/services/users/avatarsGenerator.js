/* eslint no-restricted-syntax: 0, no-await-in-loop: 0 */

class AvatarsGenerator {
  #files;
  #avatars;

  constructor(files) {
    this.#files = files;
    this.#avatars = [];
  }

  async call() {
    for (const [index, file] of Object.entries(this.#files)) {
      this.#process({ file, index });
    }

    return this.#avatars;
  }

  async #process({ file, index }) {
    const fileName = file.name;
    const fileType = file.type;
    const main = AvatarsGenerator.#isMainAvatar(index);
    const avatarInBase64 = await AvatarsGenerator.#convertToBase64(file);

    this.#avatars.push({
      fileName,
      fileType,
      main,
      base64: avatarInBase64
    });
  }

  static #convertToBase64(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => resolve(reader.result);
    });
  }

  static #isMainAvatar(index) {
    return index === '0';
  }
}

export default AvatarsGenerator;
