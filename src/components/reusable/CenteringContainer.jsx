import React from 'react';
import { propTypes, defaultProps } from '../../props/reusable/centeringContainer.js';
import Grid from '@mui/material/Grid';

const CenteringContainer = ({ children, columnQuantity, className, isItem }) => (
  <Grid
    justifyContent="center"
    alignItems="center"
    xs={columnQuantity}
    className={className}
    item={isItem}
    container
    >
      {children}
  </Grid>
)
    
CenteringContainer.propTypes = propTypes;
CenteringContainer.defaultProps = defaultProps;

export default CenteringContainer;
