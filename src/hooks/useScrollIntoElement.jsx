import { useEffect } from 'react';
import { scrollIntoElement } from 'utils/helpers.js';

const useScrollIntoElement = ({ scrollDependency, elementSelector }) => {
  useEffect(() => {
    scrollIntoElement({ elementSelector });
  }, [scrollDependency]);
};

export default useScrollIntoElement;
