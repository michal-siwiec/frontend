import React, { Fragment } from 'react';
import ClientDetails from './ClientDetails.jsx';
import DeliveryMethod from './DeliveryMethod.jsx';
import PaymentMethod from './PaymentMethod.jsx';
import Summary from './Summary.jsx';

const Form = () => (
  <Fragment>
    <ClientDetails />
    <DeliveryMethod />
    <PaymentMethod />
    <Summary />
  </Fragment>
);

export default Form;
