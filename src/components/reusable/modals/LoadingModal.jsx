import React from 'react';
import { Modal, CircularProgress } from '@mui/material';

const LoadingModal = ({ open, info }) => {
  const blockClassName = 'loading-modal';

  return (
    <Modal
      open={open}
      className={blockClassName}
    >
      <div className={`${blockClassName}__content-wrapper`}>
        <h2 className={`${blockClassName}__header`}>
          {info}
        </h2>
        <CircularProgress disableShrink className={`${blockClassName}__loader`} />
      </div>
    </Modal>
  )
};

export default LoadingModal;
