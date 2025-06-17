import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FileInput from 'components/inputs/FileInput.jsx';

describe('FileInput component', () => {
  const mockOnChange = jest.fn();
  const mockRef = React.createRef();

  it('renders component properly', () => {
    const { container } = render(<FileInput onChange={mockOnChange} innerRef={mockRef} dataTestID="file-input" />);

    const input = container.querySelector('[data-testid="file-input"]');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'file');
  });

  it('calls onChange handler when file is selected', () => {
    const { container } = render(<FileInput onChange={mockOnChange} innerRef={mockRef} dataTestID="file-input" />);

    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const input = container.querySelector('[data-testid="file-input"]');
    fireEvent.change(input, { target: { files: [file] } });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it('shows validation error if provided', () => {
    const errorText = 'This field is required.';
    render(<FileInput onChange={mockOnChange} innerRef={mockRef} dataTestID="file-input" validationError={errorText} />);

    expect(screen.getByText(errorText)).toBeInTheDocument();
    expect(screen.getByText(errorText)).toHaveClass('input__error');
  });
});
