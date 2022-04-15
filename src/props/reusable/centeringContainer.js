import { number, string } from 'prop-types';

export const propTypes = {
  columnQuantity: number.isRequired,
  className: string,
  isItem: false
};

export const defaultProps = {
  className: '',
  isItem: false
};
