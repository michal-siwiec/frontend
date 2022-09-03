import React from 'react';
import { exact, bool, func } from 'prop-types';
import { Modal } from '@mui/material';

const EmptyBasketModal = ({ open, handleOnClose }) => {
  const blockName = 'modal';

  return (
    <Modal
      className={blockName}
      open={open}
      onClose={handleOnClose}
    >
      <h1>Twój koszyk jest pusty!</h1>
    </Modal>
  );
};

EmptyBasketModal.propTypes = exact({
  open: bool.isRequired,
  handleOnClose: func.isRequired
}).isRequired;

export default EmptyBasketModal;
