import React, { Fragment, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPaymentMethod } from 'redux_/order/actionsCreator.ts';
import { OrderContext } from 'contexts/contexts.ts';
import PaymentIcon from '@mui/icons-material/Payment';
import PaidIcon from '@mui/icons-material/Paid';
import CheckBox from 'components/inputs/CheckBox.jsx';
import SubmitButton from 'components/SubmitButton.jsx';

const PaymentMethod = () => {
  const blockName = 'payment-method';
  const { setStep } = useContext(OrderContext);
  const { cashPayment, traditionalTransfer } = useSelector((store) => store.order.payment);
  const dispatch = useDispatch();

  const handleCashPaymentOnChange = () => {
    dispatch(setPaymentMethod({ cashPayment: true, traditionalTransfer: false }));
  };

  const handleTraditionalPaymentOnChange = () => {
    dispatch(setPaymentMethod({ cashPayment: false, traditionalTransfer: true }));
  };

  const handleSubmitOnMouseDown = () => setStep(3);

  return (
    <div className={`order__form-part-container ${blockName}`}>
      <CheckBox
        onChange={handleCashPaymentOnChange}
        checked={cashPayment}
        label={(
          <Fragment>
            <PaidIcon className={`${blockName}__icon`} />
            <span className={`${blockName}__icon-label`}>Płatność przy odbiorze</span>
          </Fragment>
        )}
        dataTestId="payment-on-delivery-checkbox"
      />
      <CheckBox
        onChange={handleTraditionalPaymentOnChange}
        checked={traditionalTransfer}
        label={(
          <Fragment>
            <PaymentIcon className={`${blockName}__icon`} />
            <span className={`${blockName}__icon-label`}>Przelew tradycyjny</span>
          </Fragment>
        )}
        dataTestId="traditional-transfer-checkbox"
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
