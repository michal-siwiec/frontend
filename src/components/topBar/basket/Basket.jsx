import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { countTotalPrice } from '../../../utils/utils.js';
import BasketSummary from './BasketSummary.jsx';

const Basket = () => {
  const blockName = 'top-bar';
  const productsInBasket = useSelector(({ basket: { addedProducts } }) => addedProducts);
  const [isBasketSummaryOpen, setIsBasketSummaryOpen] = useState(false);

  const handleShowBasketSummary = () => {
    setIsBasketSummaryOpen(!isBasketSummaryOpen);
  };

  return (
    <div className={`${blockName}__basket`}>
      <i
        className={`${blockName}__basket-icon icon-shop-basket`}
        onMouseDown={handleShowBasketSummary}
        role="button"
        tabIndex={0}
      />
      {countTotalPrice(productsInBasket)}
      <BasketSummary
        isOpen={isBasketSummaryOpen}
        handleClose={handleShowBasketSummary}
      />
    </div>
  );
};

export default Basket;
