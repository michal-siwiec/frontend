import React, { Fragment } from 'react';
import { exact, bool, func } from 'prop-types';
import { useSelector } from 'react-redux';
import DialogContainer from 'components/containers/DialogContainer.jsx';
import Product from 'components/product/Product.jsx';

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
        {
          productsInBasket.map(({ id, attributes }, index) => (
            <Product
              product={attributes}
              key={id}
              index={index}
              mode="basket"
            />
          ))
        }
      </Fragment>
    </DialogContainer>
  );
};

BasketSummary.propTypes = exact({
  isOpen: bool.isRequired,
  handleClose: func.isRequired
}).isRequired;

export default BasketSummary;
