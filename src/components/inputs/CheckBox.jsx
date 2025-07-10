import { exact, func, string, element, oneOfType } from 'prop-types';

const CheckBox = ({ classNames, onChange, checked, label, dataTestId }) => (
  <div className="checkbox__wrapper">
    <input
      type="checkbox"
      className={`checkbox ${classNames}`}
      onChange={onChange}
      checked={checked}
      data-testid={dataTestId}
    />
    {label}
  </div>
);

CheckBox.propTypes = exact({
  classNames: string,
  onChange: func.isRequired,
  label: oneOfType([element, string]).isRequired,
  dataTestId: string
}).isRequired;

CheckBox.defaultProps = {
  classNames: '',
  dataTestId: ''
};

export default CheckBox;
