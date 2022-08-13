import React from 'react';
import { exact, func, string } from 'prop-types';

const TextArea = ({
  classNames,
  value,
  onChange,
  placeholder
}) => (
  <textarea
    className={`text-area ${classNames}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

TextArea.propTypes = exact({
  classNames: string,
  value: string.isRequired,
  onChange: func.isRequired,
  placeholder: string
});

TextArea.defaultProps = {
  classNames: '',
  placeholder: ''
};

export default TextArea;
