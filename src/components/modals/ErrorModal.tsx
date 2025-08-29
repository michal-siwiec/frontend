import React from 'react';
import { Modal } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

type ErrorModalProps = { isOpen: boolean, info: string, handleOnClose: () => void };

const ErrorModal = ({ isOpen, handleOnClose, info }: ErrorModalProps) => {
  const blockName = 'modal';

  return (
    <Modal
      open={isOpen}
      onClose={handleOnClose}
      className={`${blockName} ${blockName}--error`}
    >
      <div className={`${blockName}__content-wrapper`}>
        <ErrorIcon className={`${blockName}__error-icon`} />
        <h2 className={`${blockName}__header`}>Wystąpił niespodziewany problem!</h2>
        <div className={`${blockName}__info`}>
          <p>{info}</p>
          <p>Za utrudnienia przepraszamy</p>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorModal;
