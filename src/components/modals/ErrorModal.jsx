import React, { useState, useEffect } from 'react';
import { exact, string } from 'prop-types';
import { Modal } from '@mui/material';

const ErrorModal = ({ info }) => {
  const blockName = 'modal';
  const [isOpen, setIsOpen] = useState(true);

  const closeErrorModalAfterFiveSeconds = () => {
    const visibilityTime = 5000;
    setTimeout(() => setIsOpen(false), visibilityTime);
  };

  useEffect(() => closeErrorModalAfterFiveSeconds(), []);

  return (
    <Modal
      open={isOpen}
      className={`${blockName} ${blockName}--error`}
    >
      <div className={`${blockName}__content-wrapper`}>
        <i className={`${blockName}__error-icon icon-circle-error`} />
        <h2 className={`${blockName}__header`}>Wystąpił niespodziewany problem!</h2>
        <div className={`${blockName}__info`}>
          <p>{info}</p>
          <p>Za utrudnienia przepraszamy</p>
        </div>
      </div>
    </Modal>
  );
};

ErrorModal.propTypes = exact({
  info: string
}).isRequired;

export default ErrorModal;
