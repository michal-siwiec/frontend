import React from 'react';
import { TextField } from '@mui/material';
import { propTypes, defaultProps } from '../../props/reusable/input.js';

const Input = ({
  type,
  variant,
  placeholder,
  inputProps,
  onChange,
  value,
  inputRef,
  className
}) => (
  <TextField
    type={type}
    variant={variant}
    placeholder={placeholder}
    inputProps={inputProps}
    onChange={onChange}
    value={value}
    inputRef={inputRef}
    className={className}
    size="small"
  />
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
