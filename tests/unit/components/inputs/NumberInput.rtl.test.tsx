import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NumberInput from 'components/inputs/NumberInput';

describe('NumberInput component', () => {
  const mockOnChange = jest.fn();

  it('renders an input of type number with correct value and max', () => {
    render(<NumberInput max={10} value={5} onChange={mockOnChange} />);

    const input = screen.getByDisplayValue('5');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'number');
    expect(input).toHaveAttribute('max', '10');
    expect(input).toHaveAttribute('min', '1');
  });

  it('calls onChange when value changes', () => {
    render(<NumberInput max={10} value={5} onChange={mockOnChange} />);

    const input = screen.getByDisplayValue('5');
    fireEvent.change(input, { target: { value: '6' } });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it('respects the disabled prop', () => {
    render(<NumberInput max={10} value={5} onChange={mockOnChange} disabled />);

    const input = screen.getByDisplayValue('5');

    expect(input).toBeDisabled();
  });
});
