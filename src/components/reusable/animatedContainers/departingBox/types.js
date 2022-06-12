import { exact, element, number } from 'prop-types';

export const propTypes = exact({
  children: element.isRequired,
  order: number.isRequired
}).isRequired;
