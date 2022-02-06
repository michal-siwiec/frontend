import React from 'react';
import { element } from 'prop-types';
import { Box as MUI_Box} from '@mui/material';

const Box = ({ children }) => (
  <MUI_Box>
    {children}
  </MUI_Box>
);

Box.propTypes = {
  children: element.isRequired
};

Box.defaultProps = {

};

export default Box;
