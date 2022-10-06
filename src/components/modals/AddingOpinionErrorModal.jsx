import React from 'react';
import { exact, bool, func } from 'prop-types';
import { Modal } from '@mui/material';

const AddingOpinionErrorModal = ({ isOpen, handleOnClose }) => {
  const blockName = 'modal';

  return (
    <Modal
      className={blockName}
      open={isOpen}
      onClose={handleOnClose}
    >
      <h1>AddingOpinionErrorModal</h1>
    </Modal>
  );
};

AddingOpinionErrorModal.propTypes = exact({
  open: bool.isRequired,
  handleOnClose: func.isRequired
}).isRequired;

export default AddingOpinionErrorModal;
