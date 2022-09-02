import React from 'react';
import { Rating as MuiRating } from '@mui/material';
import {
  exact,
  string,
  bool,
  func
} from 'prop-types';

const Rating = ({
  value,
  readOnly,
  onChange,
  classes
}) => (
  <MuiRating
    value={value}
    readOnly={readOnly}
    onChange={onChange}
    className={classes}
  />
);

Rating.propTypes = exact({
  value: string.isRequired,
  readOnly: bool,
  onChange: func.isRequired,
  classes: string
}).isRequired;

Rating.defaultProps = exact({
  readOnly: true,
  classes: ''
}).isRequired;

export default Rating;
