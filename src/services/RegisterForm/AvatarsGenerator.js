class AvatarsGenerator {
  #files;
  #avatars;

  constructor(files) {
    this.#files = files;
    this.#avatars = []
  }

  async generateAvatars() {
    for (const [index, file] of Object.entries(this.#files)) {
      const avatarInBase64 = await this.#convertPictureToBase64(file);
      const main = this.#isMainAvatar(index);
      const fileName = file.name;

      this.#avatars.push({ fileName, main, base64: avatarInBase64 });
    }

    return this.#avatars;
  }

  #convertPictureToBase64(file) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => resolve(reader.result);
    })
  }

  #isMainAvatar(index) {
    return index === '0' ? true : false;
  }
}

export default AvatarsGenerator;
