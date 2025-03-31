import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SuccessModal from 'components/modals/SuccessModal';

describe('SuccessModal', () => {
  const handleOnClose = jest.fn();

  const setup = (props = {}) => {
    return render(
      <SuccessModal
        isOpen={true}
        handleOnClose={handleOnClose}
        info="Success info message"
        {...props}
      >
        <div>Test Child</div>
      </SuccessModal>
    );
  };

  it('renders modal with correct content when open', () => {
    setup();

    expect(screen.getByText(/Dziękujemy!/i)).toBeInTheDocument();
    expect(screen.getByText(/Success info message/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Child/i)).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    setup({ isOpen: false, info: "Should not show", children: <div>Hidden child</div> });

    expect(screen.queryByText(/Dziękujemy!/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Should not show/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Hidden child/i)).not.toBeInTheDocument();
  });

  it('calls handleOnClose when Escape key is pressed', () => {
    setup();

    const modalBackdrop = screen.getByRole('presentation'); // MUI modal root
    fireEvent.keyDown(modalBackdrop, { key: 'Escape', code: 'Escape' });
    fireEvent.click(modalBackdrop);

    expect(handleOnClose).toHaveBeenCalled();
  });
});
