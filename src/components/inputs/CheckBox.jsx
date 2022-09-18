import React from 'react';
import {
  exact,
  func,
  string,
  element,
  oneOfType
} from 'prop-types';

const CheckBox = ({
  classNames,
  onClick,
  checked,
  label
}) => (
  <div className="checkbox__wrapper">
    <input
      type="checkbox"
      className={`checkbox ${classNames}`}
      onClick={onClick}
      checked={checked}
    />
    {label}
  </div>
);

CheckBox.propTypes = exact({
  classNames: string,
  onClick: func.isRequired,
  label: oneOfType([element, string]).isRequired
}).isRequired;

CheckBox.defaultProps = {
  classNames: ''
};

export default CheckBox;
