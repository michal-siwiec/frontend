import FileSaver from 'file-saver';
import { getObject } from 'services/s3Service.js';

const fetchFileOnLocalFileSystem = ({ bucket = 'budoman-development', key, fileName, fileType = 'application/pdf' }) => {
  getObject({
    bucket,
    key,
    responseHandler: (error, data) => {
      if (error) {
        // TODO: Better loggin error - as well to Rollbar
        console.error('Error fetching file:', error);
        return;
      }

      const blob = new Blob([data.Body], { type: fileType });
      FileSaver.saveAs(blob, fileName);
    }
  });
};

export default fetchFileOnLocalFileSystem;
