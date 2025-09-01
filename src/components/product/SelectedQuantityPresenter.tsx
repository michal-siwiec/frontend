import React from 'react';
import { useSelector } from 'react-redux';
import { Products } from 'types/product';
import NumberInput from 'components/inputs/NumberInput';

type SelectedQuantityPresenterProps = { productID: string };
type BasketType = { basket: { addedProducts: Products } };

const SelectedQuantityPresenter = ({ productID }: SelectedQuantityPresenterProps) => {
  const blockName = 'product';
  const product = useSelector(({ basket: { addedProducts } }: BasketType) => addedProducts.find((product_) => product_.id === productID));

  if (!product) throw new Error('Product not found!');

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

export default SelectedQuantityPresenter;
