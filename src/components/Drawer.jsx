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
  children,
  className
}) => (
  <MuiDrawer
    anchor={anchor}
    open={isOpen}
    onClose={onClose}
    className={`drawer ${className}`}
  >
    {children}
  </MuiDrawer>
);

Drawer.propTypes = exact({
  anchor: string,
  isOpen: bool.isRequired,
  onClose: func.isRequired,
  children: element.isRequired,
  className: string
}).isRequired;

Drawer.defaultProps = {
  anchor: 'left',
  className: ''
};

export default Drawer;
