import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Drawer from 'components/Drawer.jsx';
import React from 'react';

describe('Drawer component', () => {
  const defaultProps = {
    anchor: 'left',
    isOpen: true,
    onClose: jest.fn(),
    children: <div>Hello from Drawer</div>,
    className: 'custom-class'
  };

  it('renders children when open', () => {
    render(<Drawer {...defaultProps} />);

    expect(screen.getByText('Hello from Drawer')).toBeInTheDocument();
  });

  it('does not render children when closed', () => {
    render(<Drawer {...defaultProps} isOpen={false} />);

    expect(screen.queryByText('Hello from Drawer')).not.toBeInTheDocument();
  });

  it('calls onClose when clicking press ESC', async () => {
    render(<Drawer {...defaultProps} />);

    const user = userEvent.setup();
    await user.keyboard('{Escape}');

    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });
});
