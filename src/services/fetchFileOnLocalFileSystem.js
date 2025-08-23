import FileSaver from 'file-saver';
import { getObject } from 'services/s3.js';
import { AWS_BUCKET } from 'utils/environment.ts';

const fetchFileOnLocalFileSystem = ({ bucket = AWS_BUCKET, key, fileName, fileType = 'application/pdf' }) => {
  getObject({
    bucket,
    key,
    responseHandler: (error, data) => {
      if (error) return;

      const blob = new Blob([data.Body], { type: fileType });
      FileSaver.saveAs(blob, fileName);
    }
  });
};

export default fetchFileOnLocalFileSystem;
