import React, { Fragment } from 'react';
import clsx from 'clsx';
import {
  exact,
  string,
  func,
  oneOf
} from 'prop-types';

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
      className={clsx(`input text-input ${classNames}`, validationError && 'text-input--error')}
      value={value}
      onChange={onChange}
    />
    {validationError && <div className="input__error">{validationError}</div>}
  </Fragment>
);

TextInput.propTypes = exact({
  placeholder: string.isRequired,
  classNames: string,
  type: oneOf(['text', 'password']),
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
