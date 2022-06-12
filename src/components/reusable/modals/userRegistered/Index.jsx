import React from 'react';
import { Grid, Modal } from '@mui/material';
import { propTypes } from './types';
import Button from '../../Button.jsx';

const UserRegisteredModal = ({ open, setUserRegisterWithSuccess }) => {
  const blockName = 'info-modal';

  const handleLoginClick = () => {
    setUserRegisterWithSuccess(false);
  };

  return (
    <Modal
      open={open}
      className={blockName}
    >
      <Grid container spacing={3} className={`${blockName}__content-wrapper`}>
        <Grid item xs={12}>
          <h2 className={`${blockName}__header`}>
            Twoje konto zostało pomyślnie założone!
          </h2>
        </Grid>
        <Grid item xs={4}>
          <Button value="Anuluj" onClick={() => setUserRegisterWithSuccess(false)} />
        </Grid>
        <Grid item xs={6}>
          <Button value="Zaloguj się" onClick={handleLoginClick} />
        </Grid>
      </Grid>
    </Modal>
  );
};

UserRegisteredModal.propTypes = propTypes;

export default UserRegisteredModal;
