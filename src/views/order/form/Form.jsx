import React, { Fragment, useContext } from 'react';
import { OrderContext } from 'contexts/contexts.js';
import ClientDetails from 'views/order/form/steps/ClientDetails.jsx';
import DeliveryMethod from 'views/order/form/steps/DeliveryMethod.jsx';
import PaymentMethod from 'views/order/form/steps/PaymentMethod.jsx';
import Summary from 'views/order/form/steps/Summary.jsx';

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
