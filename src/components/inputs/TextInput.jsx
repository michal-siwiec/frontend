import React, { Fragment } from 'react';
import clsx from 'clsx';
import { exact, string, func } from 'prop-types';

const TextInput = ({
  placeholder,
  type,
  classNames,
  value,
  onChange,
  validationError
}) => (
  <Fragment>
    <input
      type={type}
      placeholder={placeholder}
      className={clsx(`text-input ${classNames}`, validationError && 'text-input--error')}
      value={value}
      onChange={onChange}
    />
    {validationError && <div className="text-input__error">{validationError}</div>}
  </Fragment>
);

TextInput.propTypes = exact({
  placeholder: string.isRequired,
  classNames: string,
  value: string.isRequired,
  onChange: func.isRequired,
  validationError: string
}).isRequired;

TextInput.defaultProps = {
  classNames: '',
  type: 'text',
  validationError: ''
};

export default TextInput;
