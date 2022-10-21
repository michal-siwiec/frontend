import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { countTotalPrice } from 'utils/helpers.js';
import { ADD_ORDER } from 'graphql/mutations/order.js';
import { generateAddOrderPayload } from 'utils/order.js';
import SubmitButton from 'components/SubmitButton.jsx';

const Summary = () => {
  const blockName = 'summary';
  const navigate = useNavigate();
  const { addedProducts } = useSelector((store) => store.basket);
  const [addOrder, { loading, error, data }] = useMutation(
    ADD_ORDER,
    { variables: { input: generateAddOrderPayload() } }
  );

  const handleSubmitOnMouseDown = () => {
    addOrder();
  };

  useEffect(() => {
    if (!data) return;

    navigate('/thank-you-page');
  }, [data]);

  return (
    <div className={blockName}>
      <table className={`${blockName}__table`}>
        <tr className={`${blockName}__row`}>
          <th className={`${blockName}__col`}>Nazwa</th>
          <th className={`${blockName}__col`}>Cena</th>
          <th className={`${blockName}__col`}>Ilość</th>
        </tr>
        {
          addedProducts.map(({ quantity, attributes: { name, price } }) => (
            <tr className={`${blockName}__row`}>
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
      </table>
      <SubmitButton
        classNames="button--order"
        onMouseDown={handleSubmitOnMouseDown}
        value="Kupuje i płacę"
      />
    </div>
  );
};

export default Summary;
