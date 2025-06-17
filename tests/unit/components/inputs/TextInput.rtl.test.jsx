import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from 'components/inputs/TextInput.jsx';

describe('TextInput', () => {
  const mockOnChange = jest.fn();

  const setup = (props = {}) => {
    render(
      <TextInput
        value="hello"
        onChange={mockOnChange}
        placeholder="Enter something"
        {...props}
      />
    );
  };

  it('renders with the correct value and type', () => {
    setup();

    const input = screen.getByPlaceholderText('Enter something');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveValue('hello');
  });

  it('calls onChange when typing', () => {
    setup();

    const input = screen.getByPlaceholderText('Enter something');
    fireEvent.change(input, { target: { value: 'new value' } });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it('applies error class if validationError is present and displays validation error text', () => {
    setup({ classNames: 'my-input', validationError: 'Required field' });

    const errorElement = screen.getByText('Required field');

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass('input__error');
  });

  it('can be disabled', () => {
    setup({ isDisabled: true });

    const input = screen.getByPlaceholderText('Enter something');

    expect(input).toBeDisabled();
  });
});
