import FileSaver from 'file-saver';
import { getObject } from 'services/s3';
import { AWS_BUCKET } from 'utils/environment';

const fetchFileOnLocalFileSystem = (key: string, fileName: string, bucket: string = AWS_BUCKET, fileType: 'application/pdf' = 'application/pdf') => {
  getObject(
    key,
    bucket,
    (error, data) => {
      if (error) return;

      // @ts-ignore
      const blob = new Blob([data.Body!], { type: fileType });
      FileSaver.saveAs(blob, fileName);
    }
  );
};

export default fetchFileOnLocalFileSystem;
