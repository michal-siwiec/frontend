import React from 'react';
import { Rating as MuiRating } from '@mui/material';

type BaseRatingProps = {
  value: number,
  readOnly?: boolean,
  classes?: string,
  onChange?: (...args: any[]) => void
};

const Rating = ({ value, onChange = () => {}, readOnly = true, classes = '' }: BaseRatingProps) => (
  <MuiRating
    value={value}
    readOnly={readOnly}
    onChange={onChange}
    className={classes}
  />
);

export default Rating;
