import { S3, AWSError } from 'aws-sdk';
import { GetObjectOutput } from 'aws-sdk/clients/s3';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, AWS_BUCKET } from 'utils/environment';

const s3 = new S3({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION
});

export const getSignedUrl = (
  { bucket = AWS_BUCKET, key }: { bucket: string, key: string }
) => s3.getSignedUrl('getObject', { Bucket: bucket, Key: key });

export const getObject = async (
  { bucket = AWS_BUCKET, key, responseHandler = () => {} }: { bucket: string, key: string, responseHandler: (error: AWSError, data: GetObjectOutput) => void }
) => s3.getObject({ Bucket: bucket, Key: key }, responseHandler);
