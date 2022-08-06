import React from 'react';
import { exact, bool, string } from 'prop-types';
import { Modal } from '@mui/material';

const RegisterUserErrorModal = ({ open }) => {
  const blockName = 'register-user-error-modal';

  return (
    <Modal open={open} className={blockName}>
      <div className={`${blockName}__content-wrapper`}>
        <h2 className={`${blockName}__header`}>
          Błąd rejestracji
        </h2>
        <div className={`${blockName}__info`}>
          <p>Podczas rejestrowania konta wystąpił nieoczekiwany błąd!</p>
        </div>
      </div>
    </Modal>
  );
};

RegisterUserErrorModal.propTypes = exact({
  open: bool.isRequired
});

export default RegisterUserErrorModal;
