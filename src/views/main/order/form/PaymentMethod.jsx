import React, { Fragment, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPaymentMethod } from 'redux_/order/actionsCreator.js';
import { OrderContext } from 'contexts/contexts.js';
import CheckBox from 'components/inputs/CheckBox.jsx';
import SubmitButton from 'components/SubmitButton.jsx';

const PaymentMethod = () => {
  const blockName = 'payment-method';
  const { setStep } = useContext(OrderContext);
  const { cashPayment, traditionalTransfer } = useSelector((store) => store.order.payment);
  const dispatch = useDispatch();

  const handleCashPaymentOnClick = () => {
    dispatch(setPaymentMethod({ cashPayment: true, traditionalTransfer: false }));
  };

  const handleTraditionalPaymentOnClick = () => {
    dispatch(setPaymentMethod({ cashPayment: false, traditionalTransfer: true }));
  };

  const handleSubmitOnMouseDown = () => setStep(3);

  return (
    <div className={`order__form-part-container ${blockName}`}>
      <CheckBox
        onClick={handleCashPaymentOnClick}
        checked={cashPayment}
        label={(
          <Fragment>
            <i className={`icon-cash-payment ${blockName}__icon`} />
            <span className={`${blockName}__icon-label`}>Płatność przy odbiorze</span>
          </Fragment>
        )}
      />
      <CheckBox
        onClick={handleTraditionalPaymentOnClick}
        checked={traditionalTransfer}
        label={(
          <Fragment>
            <i className={`icon-traditional-transfer ${blockName}__icon`} />
            <span className={`${blockName}__icon-label`}>Przelew tradycyjny</span>
          </Fragment>
        )}
      />
      <SubmitButton
        classNames="button--client-details"
        onMouseDown={handleSubmitOnMouseDown}
        value="Dalej"
      />
    </div>
  );
};

export default PaymentMethod;
