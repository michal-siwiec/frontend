import React from 'react';
import { exact, number } from 'prop-types';

const VawyDots = ({ dotsCount }) => (
  <div className="wave">
    { [...Array(dotsCount)].map(() => <span className="dot" />) }
  </div>
);

VawyDots.propTypes = exact({
  dotsCount: number.isRequired
}).isRequired;

export default VawyDots;
