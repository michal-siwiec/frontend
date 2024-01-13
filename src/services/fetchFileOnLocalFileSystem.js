import FileSaver from 'file-saver';
import { getObject } from 'services/s3Service.js';
import { AWS_BUCKET } from 'utils/environment.js';

const fetchFileOnLocalFileSystem = ({ bucket = AWS_BUCKET, key, fileName, fileType = 'application/pdf' }) => {
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
