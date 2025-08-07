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
  dataTestId
}) => (
  <Fragment>
    <textarea
      className={`input text-area ${classNames}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      ref={textareaRef}
      data-testid={dataTestId}
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
  textareaRef: element.isRequired
}).isRequired;

TextArea.defaultProps = {
  classNames: '',
  placeholder: '',
  validationError: '',
  dataTestId: ''
};

export default TextArea;
