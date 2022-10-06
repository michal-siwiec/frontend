import React from 'react';
import { exact, bool, func } from 'prop-types';
import { Modal } from '@mui/material';

const AddingOpinionErrorModal = () => {
  const blockName = 'modal';

  return (
    <Modal
      className={blockName}
      open={false}
      onClose={() => {}}
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
