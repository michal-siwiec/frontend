import React, { Fragment } from 'react';
import clsx from 'clsx';
import { exact, string, func, oneOf, bool } from 'prop-types';

const TextInput = ({ placeholder, type, classNames, value, onChange, validationError, isDisabled, dataTestId }) => (
  <Fragment>
    <input
      type={type}
      placeholder={placeholder}
      className={clsx(`input text-input ${classNames}`, validationError && 'text-input--error')}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      data-testid={dataTestId}
      autoComplete="nope"
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
  validationError: string,
  isDisabled: bool
}).isRequired;

TextInput.defaultProps = {
  classNames: '',
  type: 'text',
  validationError: '',
  isDisabled: false
};

export default TextInput;
