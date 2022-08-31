import React from 'react';
import {
  exact,
  element,
  bool,
  func
} from 'prop-types';
import { Dialog } from '@mui/material';

const DialogContainer = ({ children, isOpen, handleClose }) => (
  <Dialog
    open={isOpen}
    onClose={handleClose}
  >
    {children}
  </Dialog>
);

DialogContainer.propTypes = exact({
  children: element.isRequired,
  isOpen: bool.isRequired,
  handleClose: func.isRequired
}).isRequired;

export default DialogContainer;
