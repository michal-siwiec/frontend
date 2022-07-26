import React from 'react';
import Grid from '@mui/material/Grid';
import { propTypes, defaultProps } from '../../props/reusable/centeringContainer.js';

const CenteringContainer = ({
  children,
  columnQuantity,
  className,
  isItem,
  sx
}) => (
  <Grid
    justifyContent="center"
    alignItems="center"
    xs={columnQuantity}
    className={className}
    sx={sx}
    item={isItem}
    container
  >
    {children}
  </Grid>
);

CenteringContainer.propTypes = propTypes;
CenteringContainer.defaultProps = defaultProps;

export default CenteringContainer;
