import React, { Fragment } from 'react';
import {
  exact,
  func,
  element,
  string
} from 'prop-types';
import clsx from 'clsx';

const FileInput = ({
  onChange,
  innerRef,
  classNames,
  validationError
}) => (
  <Fragment>
    <input
      type="file"
      className={clsx(`file-input ${classNames}`, validationError && 'file-input--error')}
      onChange={onChange}
      ref={innerRef}
      multiple
    />
    {validationError && <div className="file-input__error">{validationError}</div>}
  </Fragment>
);

FileInput.propTypes = exact({
  onChange: func.isRequired,
  innerRef: element.isRequired,
  classNames: string,
  validationError: string.isRequired
}).isRequired;

FileInput.defaultProps = {
  classNames: ''
};

export default FileInput;
