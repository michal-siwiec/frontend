import React, { useState } from 'react';
import { Grid, Modal } from '@mui/material';

const AddedOpinionModal = () => {
  const blockName = 'info-modal';

  const [isOpen, setIsOpen] = useState(true);

  const handleOnClick = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      open={isOpen}
      className={blockName}
    >
      <Grid container spacing={3} className={`${blockName}__content-wrapper`}>
        <h2 className={`${blockName}__header`}>Opinia została dodana!</h2>
        <p>
          Dziękujemy za dodanie opini!<br />
          Każda opinia jest dla nas bardzo istotna
        </p>
        <div>
          <button
            className={`${blockName}__button`}
            onClick={handleOnClick}
            type="submit"
          >
            OK
          </button>
        </div>
      </Grid>
    </Modal>
  );
};

export default AddedOpinionModal;
