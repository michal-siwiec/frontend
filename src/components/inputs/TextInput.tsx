import React, { Fragment } from 'react';
import clsx from 'clsx';

type TextInputProps = {
  placeholder: string,
  type?: 'text' | 'password',
  value: string,
  classNames?: string,
  validationError?: string,
  isDisabled?: boolean,
  dataTestId?: string,
  onChange: () => void,
};

const TextInput = ({ placeholder, type = 'text', classNames = '', value, onChange, validationError, isDisabled = false, dataTestId }: TextInputProps) => (
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

export default TextInput;
