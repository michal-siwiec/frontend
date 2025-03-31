import React from 'react';
import { render, screen } from '@testing-library/react';
import SuccessModal from 'components/modals/SuccessModal';

describe('SuccessModal', () => {
  const setup = (props = {}) => {
    return render(
      <SuccessModal
        isOpen={true}
        handleOnClose={jest.fn()}
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
    render(
      <SuccessModal
        isOpen={false}
        handleOnClose={jest.fn()}
        info="Should not show"
      >
        <div>Hidden child</div>
      </SuccessModal>
    );

    expect(screen.queryByText(/Dziękujemy!/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Should not show/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Hidden child/i)).not.toBeInTheDocument();
  });
});
