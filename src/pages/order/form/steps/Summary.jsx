import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { setCompletedOrder } from 'redux_/order/actionsCreator.js';
import { clearBasket } from 'redux_/basket/actionCreators.js';
import { countTotalPrice } from 'utils/helpers.ts';
import { ADD_ORDER } from 'graphql/mutations/order.js';
import { generateAddOrderPayload } from 'services/orders.js';
import LoadingModal from 'components/modals/LoadingModal.jsx';
import ErrorModal from 'components/modals/ErrorModal.jsx';
import SubmitButton from 'components/SubmitButton.jsx';

const Summary = () => {
  const blockName = 'summary';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addedProducts } = useSelector((store) => store.basket);
  const [orderError, setOrderError] = useState(false);
  const [addOrder, { loading, data }] = useMutation(
    ADD_ORDER,
    {
      variables: { input: generateAddOrderPayload() },
      onCompleted: () => {
        dispatch(setCompletedOrder(data));
        navigate('/thank-you-page');
        dispatch(clearBasket());
      },
      onError: () => setOrderError(true)
    }
  );

  return (
    <div className={blockName}>
      <table className={`${blockName}__table`}>
        <thead className={`${blockName}__thead`}>
          <tr className={`${blockName}__row`}>
            <th className={`${blockName}__col`}>Nazwa</th>
            <th className={`${blockName}__col`}>Cena</th>
            <th className={`${blockName}__col`}>Ilość</th>
          </tr>
        </thead>
        <tbody className={`${blockName}__tbody`}>
          {
            addedProducts.map(({ quantity, attributes: { name, price } }) => (
              <tr className={`${blockName}__row`} key={uuidv4()}>
                <td className={`${blockName}__col`}>{name}</td>
                <td className={`${blockName}__col`}>{price} zł</td>
                <td className={`${blockName}__col`}>{quantity}</td>
              </tr>
            ))
          }
          <tr className={`${blockName}__row`}>
            <th className={`${blockName}__col ${blockName}__col--sum-label`}>
              Suma całkowita
            </th>
            <td className={`${blockName}__col ${blockName}__col--price`}>
              {countTotalPrice(addedProducts)} zł
            </td>
          </tr>
        </tbody>
      </table>
      <SubmitButton
        classNames="button--order"
        onMouseDown={addOrder}
        value="Kupuje i płacę"
      />
      <LoadingModal
        isOpen={loading}
        info="Trwa przetwarzanie twojego zamówienia!"
      />
      <ErrorModal
        isOpen={orderError}
        handleOnClose={() => setOrderError(false)}
        info="Niestety nie udało się złożyć zamówienia."
      />
    </div>
  );
};

export default Summary;
