import { useEffect } from 'react';
import { scrollIntoElement } from 'utils/helpers';

type useScrollIntoElementProps = { scrollDependency: string, elementSelector: string };

const useScrollIntoElement = ({ scrollDependency, elementSelector }: useScrollIntoElementProps) => {
  useEffect(() => {
    scrollIntoElement(elementSelector);
  }, [scrollDependency]);
};

export default useScrollIntoElement;
