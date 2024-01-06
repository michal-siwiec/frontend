import React from 'react';
import { exact, bool, func } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal } from '@mui/material';
import Product from 'components/product/Product.jsx';
import SubmitButton from 'components/SubmitButton.jsx';

const BasketSummaryModal = ({ open, handleOnClose }) => {
  const blockName = 'modal';
  const productsInBasket = useSelector(({ basket: { addedProducts } }) => addedProducts);
  const navigate = useNavigate();

  const handleSubmitOnMouseDown = () => {
    handleOnClose();
    navigate('/order');
  };

  return (
    <Modal
      className={blockName}
      open={open}
      onClose={handleOnClose}
      id="basket-with-products-modal"
    >
      <div className={`${blockName}__content-wrapper`}>
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
        <div className={`${blockName}__buttons-wrapper`}>
          <SubmitButton
            onMouseDown={handleSubmitOnMouseDown}
            value="Kontynuuj zakupy"
          />
        </div>
      </div>
    </Modal>
  );
};

BasketSummaryModal.propTypes = exact({
  open: bool.isRequired,
  handleOnClose: func.isRequired
}).isRequired;

export default BasketSummaryModal;
