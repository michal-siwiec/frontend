import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { propTypes, defaultProps } from '../../props/reusable/button';
import Box from './Box.jsx';

const Button = ({
  type,
  variant,
  value,
  onClick
}) => (
  <Box>
    <MuiButton
      type={type}
      variant={variant}
      onClick={onClick}
    >
      {value}
    </MuiButton>
  </Box>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
