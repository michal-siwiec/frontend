import React from 'react';
import {
  exact,
  func,
  element,
  string
} from 'prop-types';

const FileInput = ({ onChange, inputRef, classNames }) => (
  <input
    type="file"
    className={`file-input ${classNames}`}
    onChange={onChange}
    ref={inputRef}
    multiple
  />
);

FileInput.propTypes = exact({
  onChange: func.isRequired,
  inputRef: element.isRequired,
  classNames: string
}).isRequired;

FileInput.defaultProps = {
  classNames: ''
};

export default FileInput;
