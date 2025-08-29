import React from 'react';

type SubmitButtonProps = {
  classNames?: string,
  onMouseDown: () => void,
  value: string,
  dataTestId?: string
};

const SubmitButton = ({ classNames = '', onMouseDown, value, dataTestId = undefined }: SubmitButtonProps) => (
  <div
    className={`button ${classNames}`}
    onMouseDown={onMouseDown}
    role="button"
    tabIndex={0}
    data-testid={dataTestId}
  >
    {value}
  </div>
);

export default SubmitButton;
