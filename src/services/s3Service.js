import { S3 } from 'aws-sdk';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } from 'utils/environment.js';

const s3 = new S3({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION
});

// TODO: Default value for Bucket
export const getSignedUrl = ({ bucket, key }) => s3.getSignedUrl('getObject', { Bucket: bucket, Key: key });
export const getObject = async ({ bucket, key, responseHandler }) => s3.getObject({ Bucket: bucket, Key: key }, responseHandler);
