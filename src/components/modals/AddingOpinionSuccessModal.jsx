import React from 'react';
import { exact, bool, func } from 'prop-types';
import { Modal } from '@mui/material';
import SubmitButton from 'components/SubmitButton.jsx';

const AddingOpinionSuccessModal = ({ isOpen, handleOnClose }) => {
  const blockName = 'modal';

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
            onMouseDown={handleOnClose}
          />
        </div>
      </div>
    </Modal>
  );
};

AddingOpinionSuccessModal.propTypes = exact({
  isOpen: bool.isRequired,
  handleOnClose: func.isRequired
}).isRequired;

export default AddingOpinionSuccessModal;
