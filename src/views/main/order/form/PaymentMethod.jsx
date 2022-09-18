import React, { Fragment, useState, useContext } from 'react';
import { OrderContext } from 'contexts/contexts.js';
import CheckBox from 'components/inputs/CheckBox.jsx';
import SubmitButton from 'components/SubmitButton.jsx';

const PaymentMethod = () => {
  const blockName = 'payment-method';
  const [cashPaymentChecked, setCashPaymentChecked] = useState(true);
  const [traditionalTransferChecked, setTraditionalTransferChecked] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cashPayment');
  const { step, setStep } = useContext(OrderContext);

  const handleCashPaymentOnClick = () => {
    setCashPaymentChecked(true);
    setTraditionalTransferChecked(false);
    setSelectedPaymentMethod('cashPayment');
  };

  const handleTraditionalPaymentOnClick = () => {
    setTraditionalTransferChecked(true);
    setCashPaymentChecked(false);
    setSelectedPaymentMethod('traditionalPayment');
  };

  // if (step !== 2) return null;

  return (
    <div className={`order__form-part-container ${blockName}`}>
      <CheckBox
        onClick={handleCashPaymentOnClick}
        checked={cashPaymentChecked}
        label={(
          <Fragment>
            <i className={`icon-cash-payment ${blockName}__icon`} />
            <span className={`${blockName}__icon-label`}>Płatność przy odbiorze</span>
          </Fragment>
        )}
      />
      <CheckBox
        onClick={handleTraditionalPaymentOnClick}
        checked={traditionalTransferChecked}
        label={(
          <Fragment>
            <i className={`icon-traditional-transfer ${blockName}__icon`} />
            <span className={`${blockName}__icon-label`}>Przelew tradycyjny</span>
          </Fragment>
        )}
      />
      <SubmitButton
        classNames="button--client-details"
        onMouseDown={() => {}}
        value="Zapisz"
      />
    </div>
  );
};

export default PaymentMethod;
