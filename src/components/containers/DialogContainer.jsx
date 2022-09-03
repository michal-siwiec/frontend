import React from 'react';
import {
  exact,
  element,
  bool,
  func,
  string
} from 'prop-types';
import { Dialog } from '@mui/material';

const DialogContainer = ({
  children,
  isOpen,
  handleClose,
  className
}) => (
  <Dialog
    open={isOpen}
    onClose={handleClose}
    className={className}
  >
    {children}
  </Dialog>
);

DialogContainer.propTypes = exact({
  children: element.isRequired,
  isOpen: bool.isRequired,
  handleClose: func.isRequired,
  className: string
}).isRequired;

DialogContainer.defaultProps = {
  className: ''
};

export default DialogContainer;
