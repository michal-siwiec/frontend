import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingModal from 'components/modals/LoadingModal';

describe('LoadingModal', () => {
  const setup = (props = {}) => {
    return render(
      <LoadingModal
        isOpen={true}
        info="Test loading info"
        {...props}
      />
    );
  };

  it('renders modal when isOpen is true', () => {
    setup();

    expect(screen.getByText(/Prosimy o chwilę cierpliwości/i)).toBeInTheDocument();
    expect(screen.getByText(/Test loading info/i)).toBeInTheDocument();
  });

  it('does not render anything when isOpen is false', () => {
    render(<LoadingModal isOpen={false} info="Hidden info" />);

    expect(screen.queryByText(/Prosimy o chwilę cierpliwości/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Hidden info/i)).not.toBeInTheDocument();
  });
});
