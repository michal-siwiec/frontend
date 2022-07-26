import React from 'react';
import { Modal, CircularProgress } from '@mui/material';
import { propTypes } from './types.js';

const LoadingModal = ({ open, info }) => {
  const blockName = 'loading-modal';

  return (
    <Modal
      open={open}
      className={blockName}
    >
      <div className={`${blockName}__content-wrapper`}>
        <h2 className={`${blockName}__header`}>
          {info}
        </h2>
        <CircularProgress disableShrink className={`${blockName}__loader`} />
      </div>
    </Modal>
  );
};

LoadingModal.propTypes = propTypes;

export default LoadingModal;
