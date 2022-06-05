import React from 'react';
import { Rating as MuiRating } from '@mui/material';

const Rating = ({ value, readOnly }) => (
  <MuiRating name="read-only" value={value} readOnly={readOnly} />
);

export default Rating;
