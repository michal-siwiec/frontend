import React from 'react';
import { Rating as MuiRating } from '@mui/material';
import { propTypes, defaultProps } from './types.js';

const Rating = ({ value, readOnly, onChange }) => (
  <MuiRating value={value} readOnly={readOnly} onChange={onChange} />
);

Rating.propTypes = propTypes;
Rating.defaultProps = defaultProps;

export default Rating;
