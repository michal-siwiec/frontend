import React, { useState } from 'react';
import { Modal } from '@mui/material';
import SubmitButton from 'components/SubmitButton.jsx';

const UserRegisteredModal = () => {
  const blockName = 'modal';
  const [isOpen, setIsOpen] = useState(true);

  const handleLoginOnMouseDown = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      open={isOpen}
      className={`${blockName}`}
    >
      <div className={`${blockName}__content-wrapper`}>
        <h2 className={`${blockName}__header`}>
          Twoje konto zostało pomyślnie założone!
        </h2>
        <div className={`${blockName}__buttons-wrapper`}>
          <SubmitButton
            value="Anuluj"
            onMouseDown={handleLoginOnMouseDown}
          />
          <SubmitButton
            value="Zaloguj się"
            onMouseDown={handleLoginOnMouseDown}
          />
        </div>
      </div>
    </Modal>
  );
};

export default UserRegisteredModal;
