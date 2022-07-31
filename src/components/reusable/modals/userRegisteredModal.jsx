import React from 'react';
import { Grid, Modal } from '@mui/material';
import { exact, bool, func } from 'prop-types';
import SubmitButton from '../buttons/SubmitButton.jsx';

const UserRegisteredModal = ({ open, setUserRegisterWithSuccess }) => {
  const blockName = 'info-modal';

  const handleLoginOnMouseDown = () => {
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
          <SubmitButton
            value="Anuluj"
            onMouseDown={handleLoginOnMouseDown}
          />
        </Grid>
        <Grid item xs={6}>
          <SubmitButton
            value="Zaloguj się"
            onMouseDown={handleLoginOnMouseDown}
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

UserRegisteredModal.propTypes = exact({
  open: bool.isRequired,
  setUserRegisterWithSuccess: func.isRequired
}).isRequired;

export default UserRegisteredModal;
