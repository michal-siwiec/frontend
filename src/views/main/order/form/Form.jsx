import React, { Fragment, useContext } from 'react';
import { OrderContext } from 'contexts/contexts.js';
import ClientDetails from './ClientDetails.jsx';
import DeliveryMethod from './DeliveryMethod.jsx';
import PaymentMethod from './PaymentMethod.jsx';
import Summary from './Summary.jsx';

const Form = () => {
  const { step } = useContext(OrderContext);

  const isCLientDetailsStep = step === 0;
  const isDevliveryMethodStep = step === 1;
  const isPaymentMethodStep = step === 2;
  const isSummaryStep = step === 3;

  return (
    <Fragment>
      { isCLientDetailsStep && <ClientDetails /> }
      { isDevliveryMethodStep && <DeliveryMethod /> }
      { isPaymentMethodStep && <PaymentMethod /> }
      { isSummaryStep && <Summary /> }
    </Fragment>
  );
};

export default Form;
