import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { propTypes, defaultProps } from '../../props/reusable/button.js';

const Button = ({
  type,
  variant,
  value,
  onClick
}) => (
  <div>
    <MuiButton
      type={type}
      variant={variant}
      onClick={onClick}
    >
      {value}
    </MuiButton>
  </div>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
