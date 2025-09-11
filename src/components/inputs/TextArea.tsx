import React, { Fragment } from 'react';

type TextAreaProps = {
  value: string,
  textareaRef: React.Ref<HTMLTextAreaElement>,
  classNames?: string,
  placeholder?: string,
  validationError?: string,
  dataTestId?: string,
  onChange: (...args: any[]) => void
};

const TextArea = ({ value, textareaRef, onChange, classNames = '', placeholder = '', validationError = '', dataTestId = undefined }: TextAreaProps) => (
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

export default TextArea;
