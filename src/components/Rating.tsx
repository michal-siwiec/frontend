import React from 'react';
import { Rating as MuiRating } from '@mui/material';

type RatingProps = {
  value: number,
  readOnly?: boolean,
  classes?: string,
  onChange: () => void
};

const Rating = ({ value, onChange, readOnly = true, classes = '' }: RatingProps) => (
  <MuiRating
    value={value}
    readOnly={readOnly}
    onChange={onChange}
    className={classes}
  />
);

export default Rating;
