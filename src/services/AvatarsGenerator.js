/* eslint no-restricted-syntax: 0, no-await-in-loop: 0 */

class AvatarsGenerator {
  #files;
  #avatars;

  constructor(files) {
    this.#files = files;
    this.#avatars = [];
  }

  async generateAvatars() {
    for (const [index, file] of Object.entries(this.#files)) {
      const avatarInBase64 = await AvatarsGenerator.#convertPictureToBase64(file);
      const main = AvatarsGenerator.#isMainAvatar(index);
      const fileName = file.name;

      this.#avatars.push({ fileName, main, base64: avatarInBase64 });
    }

    return this.#avatars;
  }

  static #convertPictureToBase64(file) {
    return new Promise(resolve => {
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
