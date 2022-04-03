import React from 'react';
import { string, func } from 'prop-types';
import { Button as  MUI_Button} from '@mui/material';
import Box from './Box.jsx';

const Button = ({ type, variant, value, onClick }) => (
  <Box>
    <MUI_Button
      type={type}
      variant={variant}
      onClick={onClick}
    >
      {value}
    </MUI_Button>
  </Box>
)

Button.propTypes = {
  type: string,
  variant: string,
  value: string.isRequired,
  onClick: func
};

Button.defaultProps = {
  type: 'submit',
  variant: 'outlined',
  onClick: () => {}
};

export default Button;
