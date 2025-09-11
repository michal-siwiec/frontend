import React, { Fragment, ReactElement } from 'react';
import { Modal } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type SuccessModalProps = {
  isOpen: boolean,
  info: string,
  children?: ReactElement,
  handleOnClose: () => void
};

const SuccessModal = ({ isOpen, handleOnClose, info, children }: SuccessModalProps) => {
  const blockName = 'modal';

  return (
    <Modal
      open={isOpen}
      onClose={handleOnClose}
      className={`${blockName} ${blockName}--success`}
    >
      <div className={`${blockName}__content-wrapper`}>
        <CheckCircleIcon className={`${blockName}__success-icon`} />
        <h2 className={`${blockName}__header`}>Dziękujemy!</h2>
        <div className={`${blockName}__info`}>
          <p>{info}</p>
        </div>
        {children}
      </div>
    </Modal>
  );
};

export default SuccessModal;
