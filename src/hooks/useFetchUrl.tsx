import { useState, useEffect } from 'react';
import { getSignedUrl } from 'services/s3';
import { AWS_BUCKET } from 'utils/environment';

type useFetchUrlProps = { key: string, bucket?: string }

const useFetchUrl = ({ bucket = AWS_BUCKET, key }: useFetchUrlProps) => {
  const [objectURL, setObjectURL] = useState<null | string>(null);

  useEffect(() => {
    const url = getSignedUrl(key, bucket);
    setObjectURL(url);
  }, []);

  return objectURL;
};

export default useFetchUrl;
