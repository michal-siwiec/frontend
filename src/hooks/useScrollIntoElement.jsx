import { useEffect } from 'react';
import { scrollIntoElement } from 'utils/helpers.ts';

const useScrollIntoElement = ({ scrollDependency, elementSelector }) => {
  useEffect(() => {
    scrollIntoElement({ elementSelector });
  }, [scrollDependency]);
};

export default useScrollIntoElement;
