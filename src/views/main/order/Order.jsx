import React, { useState, useMemo } from 'react';
import { OrderContext } from 'contexts/contexts.js';
import FormContainer from 'components/containers/FormContainer.jsx';
import Header from './Header.jsx';
import From from './form/Form.jsx';

const Order = () => {
  const [step, setStep] = useState(0);
  const orderContextPayload = useMemo(() => ({ step, setStep }), []);

  return (
    <OrderContext.Provider value={orderContextPayload}>
      <FormContainer
        header={<Header />}
        form={<From />}
        classNames="order"
      />
    </OrderContext.Provider>
  );
};

export default Order;
