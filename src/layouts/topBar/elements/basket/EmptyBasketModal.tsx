import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@mui/material';
import SubmitButton from 'components/SubmitButton';

type EmptyBasketModalProps = {
  open: boolean,
  handleOnClose: (...args: any[]) => void
};

const EmptyBasketModal = ({ open, handleOnClose }: EmptyBasketModalProps) => {
  const blockName = 'modal';
  const navigate = useNavigate();

  const handleSubmitButtonOnMouseDown = () => {
    handleOnClose();
    navigate('/');
  };

  return (
    <Modal
      className={blockName}
      open={open}
      onClose={handleOnClose}
      id="empty-basket-modal"
    >
      <div className={`${blockName}__content-wrapper`}>
        <div className={`${blockName}__header`}>
          <h1>Twój koszyk jest pusty!</h1>
        </div>
        <div className={`${blockName}__buttons-wrapper`}>
          <SubmitButton
            onMouseDown={handleSubmitButtonOnMouseDown}
            value="Dodaj swój pierwszy produkt!"
          />
        </div>
      </div>
    </Modal>
  );
};

export default EmptyBasketModal;
