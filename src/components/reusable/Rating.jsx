import React from 'react';
import { Rating as MuiRating } from '@mui/material';

const Rating = ({ value, readOnly, onChange }) => (
  <MuiRating value={value} readOnly={readOnly} onChange={onChange} />
);

export default Rating;
