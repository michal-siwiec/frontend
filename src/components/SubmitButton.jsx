import React from 'react';
import { exact, string, func } from 'prop-types';

const SubmitButton = ({ classNames, onMouseDown, value }) => (
  <div
    className={`button ${classNames}`}
    onMouseDown={onMouseDown}
    role="button"
    tabIndex={0}
  >
    {value}
  </div>
);

SubmitButton.propTypes = exact({
  classNames: string,
  onMouseDown: func.isRequired,
  value: string.isRequired
}).isRequired;

SubmitButton.defaultProps = {
  classNames: ''
};

export default SubmitButton;
