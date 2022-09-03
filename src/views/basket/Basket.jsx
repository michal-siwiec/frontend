import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { countTotalPrice } from 'utils/helpers.js';
import EmptyBasketModal from 'components/modals/EmptyBasketModal.jsx';
import BasketSummary from './BasketSummary.jsx';

const Basket = () => {
  const productsInBasket = useSelector(({ basket: { addedProducts } }) => addedProducts);
  const [isBasketSummaryOpen, setIsBasketSummaryOpen] = useState(false);
  const [isEmptyBasketModalOpen, setIsEmptyBasketModalOpen] = useState(false);
  const blockName = 'top-bar';
  const isBasketEmpty = isEmpty(productsInBasket);

  const openEmptyBasketModal = () => setIsEmptyBasketModalOpen(true);
  const closeEmptyBasketModal = () => setIsEmptyBasketModalOpen(false);
  const openBasketSummary = () => setIsBasketSummaryOpen(true);
  const closeBasketSummary = () => setIsBasketSummaryOpen(false);

  const handleBasketOnMouseDown = () => {
    isBasketEmpty ? openEmptyBasketModal() : openBasketSummary();
  };

  return (
    <div className={`${blockName}__basket`}>
      <i
        className={`${blockName}__basket-icon icon-shop-basket`}
        onMouseDown={handleBasketOnMouseDown}
        role="button"
        tabIndex={0}
      />
      {countTotalPrice(productsInBasket)}
      <BasketSummary
        isOpen={isBasketSummaryOpen}
        handleClose={closeBasketSummary}
      />
      <EmptyBasketModal
        open={isEmptyBasketModalOpen}
        handleOnClose={closeEmptyBasketModal}
      />
    </div>
  );
};

export default Basket;
