import React, { Fragment } from 'react';
import {
  exact,
  func,
  string,
  element
} from 'prop-types';

const TextArea = ({
  classNames,
  value,
  onChange,
  placeholder,
  textareaRef,
  validationError,
  dataCy
}) => (
  <Fragment>
    <textarea
      className={`input text-area ${classNames}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      ref={textareaRef}
      data-cy={dataCy}
    />
    {validationError && <div className="text-area__error">{validationError}</div>}
  </Fragment>
);

TextArea.propTypes = exact({
  classNames: string,
  value: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  validationError: string,
  textareaRef: element.isRequired,
  dataCy: string
}).isRequired;

TextArea.defaultProps = {
  classNames: '',
  placeholder: '',
  validationError: '',
  dataCy: ''
};

export default TextArea;
