import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextArea from 'components/inputs/TextArea';

describe('TextArea component', () => {
  const mockOnChange = jest.fn();
  const mockRef = React.createRef();

  const setup = (props = {}) => {
    render(
      <TextArea
        value="Initial value"
        onChange={mockOnChange}
        textareaRef={mockRef}
        {...props}
      />
    );
  };

  it('renders textarea with correct value', () => {
    setup();
    const textarea = screen.getByDisplayValue('Initial value');
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('calls onChange when text is entered', () => {
    setup();
    const textarea = screen.getByDisplayValue('Initial value');
    fireEvent.change(textarea, { target: { value: 'New value' } });
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('applies placeholder if provided', () => {
    setup({ placeholder: 'Type something...' });
    expect(screen.getByPlaceholderText('Type something...')).toBeInTheDocument();
  });

  it('displays validation error if provided', () => {
    const errorMessage = 'This field is required';
    setup({ validationError: errorMessage });
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toHaveClass('text-area__error');
  });
});
