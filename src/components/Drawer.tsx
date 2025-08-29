import React, { ReactElement } from 'react';
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';

type DrawerProps = {
  anchor: MuiDrawerProps['anchor'],
  isOpen: boolean,
  children: ReactElement,
  className: string,
  onClose: () => void
};

const Drawer = ({ anchor = 'left', isOpen, onClose, children, className = '' }: DrawerProps) => (
  <MuiDrawer
    anchor={anchor}
    open={isOpen}
    onClose={onClose}
    className={`drawer ${className}`}
  >
    {children}
  </MuiDrawer>
);

export default Drawer;
