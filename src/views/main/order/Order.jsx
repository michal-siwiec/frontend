import React, { useState } from 'react';
import { OrderContext } from 'contexts/contexts.js';
import FormContainer from 'components/containers/FormContainer.jsx';
import Header from './header/Header.jsx';
import From from './form/Form.jsx';

const Order = () => {
  const [step, setStep] = useState(0);

  return (
    <OrderContext.Provider value={{ step, setStep }}>
      <FormContainer
        header={<Header />}
        form={<From />}
        classNames="order"
      />
    </OrderContext.Provider>
  );
};

export default Order;
