import React from 'react';
import { Grid, Modal } from '@mui/material';
import { propTypes } from '../../../props/reusable/modals/userRegisteredModal';
import Button from '../Button.jsx';

const UserRegisteredModal = ({ open, setUserRegisterWithSuccess }) => {
  const blockClassName = 'info-modal';

  const handleLoginClick = () => {
    setUserRegisterWithSuccess(false);
  };

  return (
    <Modal
      open={open}
      className={blockClassName}
    >
      <Grid container spacing={3} className={`${blockClassName}__content-wrapper`}>
        <Grid item xs={12}>
          <h2 className={`${blockClassName}__header`}>
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
