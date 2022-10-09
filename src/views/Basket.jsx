import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { countTotalPrice } from 'utils/helpers.js';
import EmptyBasketModal from 'components/modals/EmptyBasketModal.jsx';
import BasketSummaryModal from 'components/modals/BasketSummaryModal.jsx';

const Basket = () => {
  const productsInBasket = useSelector(({ basket: { addedProducts } }) => addedProducts);
  const [isBasketSummaryOpen, setIsBasketSummaryOpen] = useState(false);
  const [isEmptyBasketModalOpen, setIsEmptyBasketModalOpen] = useState(false);
  const blockName = 'basket';
  const isBasketEmpty = isEmpty(productsInBasket);

  const openEmptyBasketModal = () => setIsEmptyBasketModalOpen(true);
  const closeEmptyBasketModal = () => setIsEmptyBasketModalOpen(false);
  const openBasketSummary = () => setIsBasketSummaryOpen(true);
  const closeBasketSummary = () => setIsBasketSummaryOpen(false);
  const handleBasketOnMouseDown = () => isBasketEmpty ? openEmptyBasketModal() : openBasketSummary();

  return (
    <div className={`top-bar__basket ${blockName}`}>
      <i
        className={`${blockName}__basket-icon icon-shop-basket`}
        onMouseDown={handleBasketOnMouseDown}
        role="button"
        tabIndex={0}
      />
      {countTotalPrice(productsInBasket)}
      <EmptyBasketModal
        open={isEmptyBasketModalOpen}
        handleOnClose={closeEmptyBasketModal}
      />
      <BasketSummaryModal
        open={isBasketSummaryOpen}
        handleOnClose={closeBasketSummary}
      />
    </div>
  );
};

export default Basket;
