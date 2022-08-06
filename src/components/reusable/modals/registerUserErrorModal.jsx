import React, { useState } from 'react';
import { Modal } from '@mui/material';
import SubmitButton from '../buttons/SubmitButton.jsx';

const RegisterUserErrorModal = () => {
  const blockName = 'modal';
  const [isOpen, setIsOpen] = useState(true);

  const handleOnClick = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      open={isOpen}
      className={blockName}
    >
      <div className={`${blockName}__content-wrapper`}>
        <h2 className={`${blockName}__header`}>
          Błąd rejestracji
        </h2>
        <div className={`${blockName}__info`}>
          <p>Podczas rejestrowania konta wystąpił nieoczekiwany błąd!</p>
        </div>
        <div className={`${blockName}__buttons-wrapper`}>
          <SubmitButton
            value="Ok"
            onMouseDown={handleOnClick}
          />
        </div>
      </div>
    </Modal>
  );
};

export default RegisterUserErrorModal;
