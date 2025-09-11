import React, { Fragment, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'types/store';
import { setPaymentMethod } from 'redux_/order/actionsCreator';
import { OrderContext } from 'contexts/contexts';
import PaymentIcon from '@mui/icons-material/Payment';
import PaidIcon from '@mui/icons-material/Paid';
import CheckBox from 'components/inputs/CheckBox';
import SubmitButton from 'components/SubmitButton';

const PaymentMethod = () => {
  const blockName = 'payment-method';
  const { setStep } = useContext(OrderContext);
  const { cashPayment, traditionalTransfer } = useSelector((store: RootState) => store.order.payment);
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
