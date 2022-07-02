import { exact, number, string } from 'prop-types';

export const propTypes = exact({
  id: string.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  availableQuantity: number.isRequired
}).isRequired;
