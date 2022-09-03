import React, { useState } from 'react';
import { exact, string } from 'prop-types';
import NumberInput from 'components/inputs/NumberInput.jsx';
import SubmitButton from 'components/SubmitButton.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToBasket } from 'redux_/basket/actionCreators.js';
import { generateAddedProductPayload, generatePossibleProductQuantity } from './helpers.js';

const AddToBasketForm = ({ id, availableQuantity }) => {
  const blockName = 'product';
  const dispatch = useDispatch();
  const productsInBasket = useSelector(({ basket: { addedProducts } }) => addedProducts);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const possibleProductQuantity = generatePossibleProductQuantity({ id, productsInBasket, availableQuantity });

  const selectQuantityOnChange = ({ target: { value } }) => {
    setSelectedQuantity(value);
  };

  const handleAddToBasketOnMouseDown = () => {
    const payload = generateAddedProductPayload({ id, selectedQuantity });
    dispatch(addProductToBasket(payload));
  };

  return (
    <div className={`${blockName}__button-wrapper`}>
      <NumberInput
        max={possibleProductQuantity}
        value={selectedQuantity}
        onChange={selectQuantityOnChange}
      />
      <SubmitButton
        onMouseDown={handleAddToBasketOnMouseDown}
        value="Dodaj do koszyka"
      />
    </div>
  );
};

AddToBasketForm.propTypes = exact({
  id: string.isRequired,
  availableQuantity: string.isRequired
}).isRequired;

export default AddToBasketForm;
