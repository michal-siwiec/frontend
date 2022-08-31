import React, { Fragment } from 'react';
import { exact, bool, func } from 'prop-types';
import { useSelector } from 'react-redux';
import DialogContainer from '../../reusable/containers/DialogContainer.jsx';
import Product from '../../main/products/product/Product.jsx';

const BasketSummary = ({ isOpen, handleClose }) => {
  const blockName = 'basket-summary';
  const productsInBasket = useSelector(({ basket: { addedProducts } }) => addedProducts);

  return (
    <DialogContainer
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <Fragment>
        <h1 className={`${blockName}__header`}>Twój koszyk</h1>
        <div />
      </Fragment>
    </DialogContainer>
  );
};

// Jak utworzyc strukture folderow skoro product musi być wszedzie dosteonym komponentem?

BasketSummary.propTypes = exact({
  isOpen: bool.isRequired,
  handleClose: func.isRequired
}).isRequired;

export default BasketSummary;
