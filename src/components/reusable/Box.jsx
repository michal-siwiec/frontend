import React from 'react';
import { element } from 'prop-types';
import { Box as MuiBox } from '@mui/material';

const Box = ({ children }) => (
  <MuiBox>
    {children}
  </MuiBox>
);

//! Box is not required
Box.propTypes = {
  children: element.isRequired
};

Box.defaultProps = {

};

export default Box;
