import { S3 } from 'aws-sdk';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, AWS_BUCKET } from 'utils/environment.ts';

const s3 = new S3({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION
});

export const getSignedUrl = ({ bucket = AWS_BUCKET, key }) => s3.getSignedUrl('getObject', { Bucket: bucket, Key: key });
export const getObject = async ({ bucket = AWS_BUCKET, key, responseHandler = () => {} }) => s3.getObject({ Bucket: bucket, Key: key }, responseHandler);
