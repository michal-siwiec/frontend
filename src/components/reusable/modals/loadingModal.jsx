import React from 'react';
import { Modal, CircularProgress } from '@mui/material';
import { exact, bool, string } from 'prop-types';

const LoadingModal = ({ open, info }) => {
  const blockName = 'loading-modal';

  return (
    <Modal
      open={open}
      className={blockName}
    >
      <div className={`${blockName}__content-wrapper`}>
        <h2 className={`${blockName}__header`}>{info}</h2>
        <CircularProgress disableShrink className={`${blockName}__loader`} />
      </div>
    </Modal>
  );
};

LoadingModal.propTypes = exact({
  open: bool.isRequired,
  info: string.isRequired
}).isRequired;

export default LoadingModal;
