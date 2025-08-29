import React, { useState } from 'react';
import { exact, number, string } from 'prop-types';
import NumberInput from 'components/inputs/NumberInput.jsx';
import SubmitButton from 'components/SubmitButton.tsx';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToBasket } from 'redux_/basket/actionCreators.ts';
import { generateAddedProductPayload, generatePossibleProductQuantity } from 'services/products.ts';

const AddToBasketForm = ({ product }) => {
  const blockName = 'product';
  const { id: productID, availableQuantity } = product;
  const productsInBasket = useSelector(({ basket: { addedProducts } }) => addedProducts);
  const possibleProductQuantity = generatePossibleProductQuantity(productID, productsInBasket, availableQuantity);
  const dispatch = useDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const selectQuantityOnChange = ({ target: { value } }) => {
    let quantity = parseInt(value) || 1;
    if (quantity > possibleProductQuantity) quantity = possibleProductQuantity

    setSelectedQuantity(quantity);
  };

  const handleAddToBasketOnMouseDown = () => {
    const payload = generateAddedProductPayload(product, selectedQuantity);

    setSelectedQuantity(1);
    dispatch(addProductToBasket(payload));
  };

  return (
    <div className={`${blockName}__button-wrapper`}>
      <NumberInput
        max={possibleProductQuantity}
        value={selectedQuantity}
        onChange={selectQuantityOnChange}
      />
      <SubmitButton onMouseDown={handleAddToBasketOnMouseDown} value="Dodaj do koszyka" />
    </div>
  );
};

AddToBasketForm.propTypes = exact({
  availableQuantity: number.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  picturePath: string.isRequired,
  price: number.isRequired
}).isRequired;

export default AddToBasketForm;
