import { useState, useEffect } from 'react';
import { getSignedUrl } from 'services/s3Service.js';

const useFetchUrl = ({ bucket = 'budoman-development', key }) => {
  const [objectURL, setObjectURL] = useState(null);

  useEffect(() => {
    const url = getSignedUrl({ bucket, key });
    setObjectURL(url);
  }, []);

  return objectURL;
};

export default useFetchUrl;
