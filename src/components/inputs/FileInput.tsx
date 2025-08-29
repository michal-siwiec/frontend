import React, { Fragment } from 'react';
import clsx from 'clsx';

type FileInputProps = {
  onChange: () => void,
  innerRef: React.Ref<HTMLInputElement>,
  classNames?: string,
  validationError?: string,
  dataTestID?: string
};

const FileInput = ({ onChange, innerRef, classNames = '', validationError = '', dataTestID = undefined }: FileInputProps) => (
  <Fragment>
    <input
      type="file"
      className={clsx(`input file-input ${classNames}`, validationError && 'input--error')}
      onChange={onChange}
      ref={innerRef}
      multiple
      data-testid={dataTestID}
    />
    {validationError && <div className="input__error">{validationError}</div>}
  </Fragment>
);

export default FileInput;
