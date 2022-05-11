import { number, string, object } from 'prop-types';

export const propTypes = {
  columnQuantity: number.isRequired,
  className: string,
  isItem: false,
  sx: object
};

export const defaultProps = {
  className: '',
  isItem: false,
  sx: {}
};
