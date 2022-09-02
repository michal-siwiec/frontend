import React from 'react';
import { Modal, CircularProgress } from '@mui/material';
import { exact, string } from 'prop-types';

const LoadingModal = ({ info }) => {
  const blockName = 'modal';

  return (
    <Modal
      open
      className={`${blockName} ${blockName}--loading`}
    >
      <div className={`${blockName}__content-wrapper`}>
        <h2 className={`${blockName}__header`}>{info}</h2>
        <CircularProgress disableShrink className={`${blockName}__loader`} />
      </div>
    </Modal>
  );
};

LoadingModal.propTypes = exact({
  info: string.isRequired
}).isRequired;

export default LoadingModal;
