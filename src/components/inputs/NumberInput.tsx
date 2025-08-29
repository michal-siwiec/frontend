import React from 'react';

type NumberInputProps = {
  value: number,
  max?: number,
  classNames?: string,
  disabled?: boolean,
  onChange: () => void
};

const NumberInput = ({ value, max = undefined, classNames = '', disabled = false, onChange }: NumberInputProps) => (
  <input
    type="number"
    min={1}
    max={max}
    value={value}
    disabled={disabled}
    className={`input number-input ${classNames}`}
    onChange={onChange}
  />
);

export default NumberInput;
