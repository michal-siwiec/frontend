import React, { useState } from 'react';
import { Modal } from '@mui/material';
import SubmitButton from '../buttons/SubmitButton.jsx';

const AddingOpinionSuccessModal = () => {
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
          Opinia została dodana!
        </h2>
        <div className={`${blockName}__info`}>
          <p>
            Dziękujemy za dodanie opini!<br />
            Każda opinia jest dla nas bardzo istotna
          </p>
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

export default AddingOpinionSuccessModal;
