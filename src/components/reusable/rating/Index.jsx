import React from 'react';
import { propTypes, defaultProps } from './types';
import { Rating as MuiRating } from '@mui/material';

const Rating = ({ value, readOnly, onChange }) => (
  <MuiRating value={value} readOnly={readOnly} onChange={onChange} />
);

Rating.propTypes = propTypes;
Rating.defaultProps = defaultProps;

export default Rating;
