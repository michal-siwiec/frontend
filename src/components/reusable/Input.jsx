import React from 'react';
import { string, object, func } from 'prop-types';
import { Input as MUI_Input } from '@mui/material';
import Box from './Box.jsx';

const Input = ({ type, placeholder, inputProps, onChange }) => (
  <Box>
    <MUI_Input
      type={type}
      placeholder={placeholder}
      inputProps={inputProps}
      onChange={onChange}
    />
  </Box>
)

Input.propTypes = {
  type: string,
  placeholder: string,
  inputProps: object,
  onChange: func.isRequired
}

Input.defaultProps = {
  type: 'text',
  inputProps: {}
}

export default Input;
