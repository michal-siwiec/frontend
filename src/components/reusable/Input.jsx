import React from 'react';
import { string, object, func, ref } from 'prop-types';
import { TextField } from '@mui/material';

const Input = ({ type, variant, placeholder, inputProps, onChange, value, inputRef, className }) => (
  <TextField
    type={type}
    variant={variant}
    placeholder={placeholder}
    inputProps={inputProps}
    onChange={onChange}
    value={value}
    inputRef={inputRef}
    className={className}
    size='small'
  />
)

Input.propTypes = {
  type: string,
  variant: string,
  placeholder: string,
  inputProps: object,
  onChange: func.isRequired,
  value: string,
  inputRef: ref,
  className: string
}

Input.defaultProps = {
  type: 'text',
  variant: 'outlined',
  inputProps: {},
  inputRef: null,
  value: null, // For file input - it can't be controlled throught useState
  className: 'form-input'
}

export default Input;
