import React from 'react';
import { exact, func, string, element, oneOfType } from 'prop-types';

const CheckBox = ({ classNames, onChange, checked, label }) => (
  <div className="checkbox__wrapper">
    <input
      type="checkbox"
      className={`checkbox ${classNames}`}
      onChange={onChange}
      checked={checked}
    />
    {label}
  </div>
);

CheckBox.propTypes = exact({
  classNames: string,
  onChange: func.isRequired,
  label: oneOfType([element, string]).isRequired
}).isRequired;

CheckBox.defaultProps = {
  classNames: ''
};

export default CheckBox;
