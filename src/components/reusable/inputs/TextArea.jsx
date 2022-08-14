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
  validationError
}) => (
  <Fragment>
    <textarea
      className={`text-area ${classNames}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      ref={textareaRef}
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
  validationError: ''
};

export default TextArea;
