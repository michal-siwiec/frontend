import {
  exact,
  string,
  bool,
  func
} from 'prop-types';

export const propTypes = exact({
  value: string,
  readOnly: bool,
  onChange: func
}).isRequired;

export const defaultProps = exact({
  value: 0,
  readOnly: true,
  onChange: () => {}
}).isRequired;
