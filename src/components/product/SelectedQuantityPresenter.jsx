import React from 'react';
import { exact, string } from 'prop-types';
import { useSelector } from 'react-redux';
import NumberInput from 'components/inputs/NumberInput.jsx';

const SelectedQuantityPresenter = ({ id }) => {
  const blockName = 'product';
  const product = useSelector(({ basket: { addedProducts } }) => addedProducts.find((product_) => product_.id === id));

  return (
    <div className={`${blockName}__button-wrapper`}>
      <NumberInput
        value={product.quantity}
        classNames="number-input--basket-summary"
        disabled
      />
    </div>
  );
};

SelectedQuantityPresenter.propTypes = exact({
  id: string.isRequired
}).isRequired;

export default SelectedQuantityPresenter;
