import React, { useState } from 'react';
import { Product } from 'types/product';
import NumberInput from 'components/inputs/NumberInput.jsx';
import SubmitButton from 'components/SubmitButton';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToBasket } from 'redux_/basket/actionCreators';
import { generateAddedProductPayload, generatePossibleProductQuantity } from 'services/products';

type AddToBasketFormProps = {
  product: Product['attributes']
};

const AddToBasketForm = ({ product }: AddToBasketFormProps) => {
  const blockName = 'product';
  const { id: productID, availableQuantity } = product;
  const productsInBasket = useSelector(({ basket: { addedProducts } }) => addedProducts);
  const possibleProductQuantity = generatePossibleProductQuantity(productID, productsInBasket, availableQuantity);
  const dispatch = useDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const selectQuantityOnChange = ({ target: { value } }: { target: { value: string } }) => {
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

export default AddToBasketForm;
