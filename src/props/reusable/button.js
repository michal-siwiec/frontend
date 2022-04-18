import { string, func } from 'prop-types';

export const propTypes = {
  type: string,
  variant: string,
  value: string.isRequired,
  onClick: func
};

export const defaultProps = {
  type: 'submit',
  variant: 'outlined',
  onClick: () => {}
};
