import { useEffect } from 'react';
import { scrollIntoElement } from 'utils/helpers.js';

const useScrollIntoElement = ({ data, locationKey, elementSelector }) => {
  useEffect(() => {
    if (!data) return;

    scrollIntoElement({ elementSelector });
  }, [locationKey, data]);
};

export default useScrollIntoElement;
