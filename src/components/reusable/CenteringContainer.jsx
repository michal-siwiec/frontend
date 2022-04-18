import React from 'react';
import Grid from '@mui/material/Grid';
import { propTypes, defaultProps } from '../../props/reusable/centeringContainer';

const CenteringContainer = ({
  children,
  columnQuantity,
  className,
  isItem
}) => (
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
);

CenteringContainer.propTypes = propTypes;
CenteringContainer.defaultProps = defaultProps;

export default CenteringContainer;
