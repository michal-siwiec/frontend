import React from 'react';
import { exact, string, func } from 'prop-types';

const TextInput = ({
  placeholder,
  classNames,
  value,
  onChange
}) => (
  <input
    type="text"
    placeholder={placeholder}
    className={`text-input ${classNames}`}
    value={value}
    onChange={onChange}
  />
);

TextInput.propTypes = exact({
  placeholder: string.isRequired,
  classNames: string,
  value: string.isRequired,
  onChange: func.isRequired
}).isRequired;

TextInput.defaultProps = {
  classNames: ''
};

export default TextInput;
