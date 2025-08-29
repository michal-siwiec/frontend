import React from 'react';
import { Modal, CircularProgress } from '@mui/material';
import VawyDots from 'components/VawyDots';

type LoadingModalProps = { isOpen: boolean, info: string }

const LoadingModal = ({ isOpen, info }: LoadingModalProps) => {
  const blockName = 'modal';

  return (
    <Modal
      open={isOpen}
      className={`${blockName} ${blockName}--loading`}
    >
      <div className={`${blockName}__content-wrapper`}>
        <CircularProgress disableShrink className={`${blockName}__loader`} />
        <h2 className={`${blockName}__header`}>
          Prosimy o chwilę cierpliwości
          <VawyDots dotsCount={4} />
        </h2>
        <div className={`${blockName}__info`}>
          <p>{info}</p>
        </div>
      </div>
    </Modal>
  );
};

export default LoadingModal;
