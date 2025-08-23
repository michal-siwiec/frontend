class AvatarsGenerator {
  #files;
  #avatars: Array<{ fileName: string, fileType: string, main: boolean, base64: unknown }>;

  constructor(files: Array<File>) {
    this.#files = files;
    this.#avatars = [];
  }

  async call() {
    for (const [index, file] of Object.entries(this.#files)) {
      await this.#process({ file, index });
    }

    return this.#avatars;
  }

  async #process({ file, index }: { file: File, index: string }) {
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

  static #convertToBase64(file: File) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => resolve(reader.result);
    });
  }

  static #isMainAvatar(index: string) {
    return index === '0';
  }
}

export default AvatarsGenerator;
