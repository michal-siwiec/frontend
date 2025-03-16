import React from 'react';
import { exact, string, func } from 'prop-types';

const SubmitButton = ({ classNames, onMouseDown, value, dataCy }) => (
  <div
    className={`button ${classNames}`}
    onMouseDown={onMouseDown}
    role="button"
    tabIndex={0}
    data-cy={dataCy}
  >
    {value}
  </div>
);

SubmitButton.propTypes = exact({
  classNames: string,
  onMouseDown: func.isRequired,
  value: string.isRequired,
  dataCy: string
}).isRequired;

SubmitButton.defaultProps = {
  classNames: '',
  onMouseDown: () => {},
  dataCy: ''
};

export default SubmitButton;
