import FileSaver from 'file-saver';
import { getObject } from 'services/s3';
import { AWS_BUCKET } from 'utils/environment';

const fetchFileOnLocalFileSystem = (
  { bucket = AWS_BUCKET, key, fileName, fileType = 'application/pdf' }: { bucket: string, key: string, fileName: string, fileType: 'application/pdf' }
) => {
  getObject({
    bucket,
    key,
    responseHandler: (error, data) => {
      if (error) return;

      // @ts-ignore
      const blob = new Blob([data.Body!], { type: fileType });
      FileSaver.saveAs(blob, fileName);
    }
  });
};

export default fetchFileOnLocalFileSystem;
