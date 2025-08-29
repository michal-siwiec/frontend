import {
  exact,
  number,
  string,
  func
} from 'prop-types';

const NumberInput = ({
  max,
  value,
  classNames,
  onChange,
  disabled
}) => (
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

NumberInput.propTypes = {
  max: number,
  value: string | number,
  classNames: string,
  onChange: func
};

NumberInput.defaultProps = {
  classNames: '',
  disabled: false,
  onChange: () => {},
  max: null
};

export default NumberInput;
