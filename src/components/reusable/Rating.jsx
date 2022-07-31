import React from 'react';
import { Rating as MuiRating } from '@mui/material';
import {
  exact,
  string,
  bool,
  func
} from 'prop-types';

const Rating = ({ value, readOnly, onChange }) => (
  <MuiRating value={value} readOnly={readOnly} onChange={onChange} />
);

Rating.propTypes = exact({
  value: string,
  readOnly: bool,
  onChange: func
}).isRequired;

Rating.defaultProps = exact({
  value: 0,
  readOnly: true,
  onChange: () => {}
}).isRequired;

export default Rating;
