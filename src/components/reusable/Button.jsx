import React from 'react';
import { string } from 'prop-types';
import { Button as  MUI_Button} from '@mui/material';
import Box from './Box.jsx';

const Button = ({ type, variant, value }) => (
  <Box>
    <MUI_Button
      type={type}
      variant={variant}
    >
      {value}
    </MUI_Button>
  </Box>
)

Button.propTypes = {
  type: string,
  variant: string,
  value: string.isRequired
};

Button.defaultProps = {
  type: 'submit',
  variant: 'outlined'
};

export default Button;
