import React, { useContext } from 'react';
import { OrderContext } from 'contexts/contexts';
import ClientDetails from 'pages/order/form/steps/ClientDetails';
import DeliveryMethod from 'pages/order/form/steps/DeliveryMethod.tsx';
import PaymentMethod from 'pages/order/form/steps/PaymentMethod.tsx';
import Summary from 'pages/order/form/steps/Summary.tsx';

const Form = () => {
  const { step } = useContext(OrderContext);

  let formPart = <ClientDetails />;

  switch (step) {
  case 0:
    formPart = <ClientDetails />;
    break;
  case 1:
    formPart = <DeliveryMethod />;
    break;
  case 2:
    formPart = <PaymentMethod />
    break;
  case 3:
    formPart = <Summary />
    break;
  }

  return formPart;
};

export default Form;
