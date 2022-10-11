import React from 'react';
import {
  exact,
  string,
  bool,
  func,
  element
} from 'prop-types';
import { Drawer as MuiDrawer } from '@mui/material';

const Drawer = ({
  anchor,
  isOpen,
  onClose,
  children
}) => (
  <MuiDrawer
    anchor={anchor}
    open={isOpen}
    onClose={onClose}
  >
    {children}
  </MuiDrawer>
);

Drawer.propTypes = exact({
  anchor: string,
  isOpen: bool.isRequired,
  onClose: func.isRequired,
  children: element.isRequired
}).isRequired;

Drawer.defaultProps = {
  anchor: 'left'
};

export default Drawer;
