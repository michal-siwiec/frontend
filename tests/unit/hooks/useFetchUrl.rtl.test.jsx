import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import useFetchUrl from 'hooks/useFetchUrl.jsx';
import * as S3Service from 'services/s3.js';

describe('useFetchUrl', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('calls getSignedUrl with correct bucket and key and returns the URL', async () => {
    jest.spyOn(S3Service, 'getSignedUrl').mockImplementation(() => 'https://signed.example.com/image.jpg');

    const { result } = renderHook(() => useFetchUrl({ bucket: 'budoman-production', key: 'images/products/foundation_materials/powłoka_przeciwwilgociowa.jpeg' }));

    await waitFor(() => {
      expect(S3Service.getSignedUrl).toHaveBeenCalledWith({
        bucket: 'budoman-production',
        key: 'images/products/foundation_materials/powłoka_przeciwwilgociowa.jpeg'
      });
    });

    expect(result.current).toBe('https://signed.example.com/image.jpg');
  });

  it('calls getSignedUrl with default bucket, key and returns the URL', async () => {
    jest.spyOn(S3Service, 'getSignedUrl').mockImplementation(() => 'https://signed.example.com/image.jpg');

    const { result } = renderHook(() => useFetchUrl({ key: 'images/products/foundation_materials/powłoka_przeciwwilgociowa.jpeg' }));

    await waitFor(() => {
      expect(S3Service.getSignedUrl).toHaveBeenCalledWith({
        bucket: 'budoman-development',
        key: 'images/products/foundation_materials/powłoka_przeciwwilgociowa.jpeg'
      });
    });

    expect(result.current).toBe('https://signed.example.com/image.jpg');
  });
});
