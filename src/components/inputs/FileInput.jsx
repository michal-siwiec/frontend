import React, { Fragment } from 'react';
import { exact, func, element, string } from 'prop-types';
import clsx from 'clsx';

const FileInput = ({ onChange, innerRef, classNames, validationError, dataCy }) => (
  <Fragment>
    <input
      type="file"
      className={clsx(`input file-input ${classNames}`, validationError && 'input--error')}
      onChange={onChange}
      ref={innerRef}
      multiple
      data-cy={dataCy}
    />
    {validationError && <div className="input__error">{validationError}</div>}
  </Fragment>
);

FileInput.propTypes = exact({
  onChange: func.isRequired,
  innerRef: element.isRequired,
  classNames: string,
  validationError: string.isRequired,
  dataCy: string
}).isRequired;

FileInput.defaultProps = {
  classNames: '',
  dataCy: ''
};

export default FileInput;
