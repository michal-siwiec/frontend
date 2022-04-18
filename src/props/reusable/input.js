import {
  string,
  object,
  func,
  ref
} from 'prop-types';

export const propTypes = {
  type: string,
  variant: string,
  placeholder: string,
  inputProps: object,
  onChange: func.isRequired,
  value: string,
  inputRef: ref,
  className: string
};

export const defaultProps = {
  type: 'text',
  variant: 'outlined',
  inputProps: {},
  inputRef: null,
  value: null, // For file input - it can't be controlled throught useState
  className: 'form-input'
};
