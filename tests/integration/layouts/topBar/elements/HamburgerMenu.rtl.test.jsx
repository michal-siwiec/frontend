import { render, screen, fireEvent } from '@testing-library/react';
import HamburgerMenu from 'layouts/topBar/elements/HamburgerMenu.tsx';

describe('HamburgerMenu component', () => {
  it('renders hamburger menu properly', () => {
    render(<HamburgerMenu handleOnMouseDown={() => {}} />);

    expect(screen.getByTestId('MenuIcon')).toBeInTheDocument();
  });

  it('fires handleOnMouseDown when clicked', () => {
    const mockHandler = jest.fn();
    render(<HamburgerMenu handleOnMouseDown={mockHandler} />);

    fireEvent.mouseDown(screen.getByTestId('MenuIcon'));

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
