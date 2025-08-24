import { S3 } from 'aws-sdk';
import { getSignedUrl } from 'services/s3.ts';

describe('getSignedUrl', () => {
  it('calls s3.getSignedUrl with the correct, default parameters', () => {
    const s3Spy = jest.spyOn(S3.prototype, 'getSignedUrl').mockReturnValue('https://signed-url.example.com');
    const result = getSignedUrl({ key: 'myKey' });

    expect(s3Spy).toHaveBeenCalledWith('getObject', { Bucket: 'budoman-development', Key: 'myKey' });
    expect(result).toBe('https://signed-url.example.com');
  });

  it('calls s3.getSignedUrl with the correct parameters', () => {
    const s3Spy = jest.spyOn(S3.prototype, 'getSignedUrl').mockReturnValue('https://signed-url.example.com');
    const result = getSignedUrl({ bucket: 'bucketName', key: 'myKey' });

    expect(s3Spy).toHaveBeenCalledWith('getObject', { Bucket: 'bucketName', Key: 'myKey' });
    expect(result).toBe('https://signed-url.example.com');
  });
});
