import FileSaver from 'file-saver';

class FileDownloader {
  #url;
  #outputName;

  constructor({ url, outputName }) {
    this.#url = url;
    this.#outputName = outputName
  }

  call () {
    FileSaver.saveAs(this.#url, this.#outputName);
  }
}

export default FileDownloader;
