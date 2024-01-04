import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import useRedirect from 'hooks/useRedirect.jsx';
import { OrderContext } from 'contexts/contexts.js';
import FormContainer from 'components/containers/FormContainer.jsx';
import Header from './Header.jsx';
import From from './form/Form.jsx';

const Order = () => {
  const [step, setStep] = useState(0);
  const { addedProducts } = useSelector((store) => store.basket);

  useRedirect({ path: '/', shouldRedirect: isEmpty(addedProducts) });

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
