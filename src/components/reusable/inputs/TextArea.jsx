import React, { Fragment } from 'react';
import { exact, func, string } from 'prop-types';

const TextArea = ({
  classNames,
  value,
  onChange,
  placeholder,
  validationError
}) => (
  <Fragment>
    <textarea
      className={`text-area ${classNames}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    {validationError && <div className="text-area__error">{validationError}</div>}
  </Fragment>
);

TextArea.propTypes = exact({
  classNames: string,
  value: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  validationError: string
});

TextArea.defaultProps = {
  classNames: '',
  placeholder: '',
  validationError: ''
};

export default TextArea;
