import React from 'react';
import { string, object, func, ref } from 'prop-types';
import { Input as MUI_Input } from '@mui/material';
import Box from './Box.jsx';

const Input = ({ type, placeholder, inputProps, onChange, value, inputRef }) => (
  <Box>
    <MUI_Input
      type={type}
      placeholder={placeholder}
      inputProps={inputProps}
      onChange={onChange}
      value={value}
      inputRef={inputRef}
    />
  </Box>
)

Input.propTypes = {
  type: string,
  placeholder: string,
  inputProps: object,
  onChange: func.isRequired,
  value: string,
  inputRef: ref
}

Input.defaultProps = {
  type: 'text',
  inputProps: {},
  inputRef: null,
  value: null // For file input - it can't be controlled throught useState 
}

export default Input;
