import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'types/store';
import { isEmpty } from 'lodash';
import useRedirect from 'hooks/useRedirect';
import { OrderContext } from 'contexts/contexts';
import FormContainer from 'components/containers/FormContainer';
import Header from './Header';
import From from './form/Form';

const Order = () => {
  const [step, setStep] = useState(0);
  const { addedProducts } = useSelector((store: RootState) => store.basket);

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
