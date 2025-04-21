import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Rating from 'components/Rating.jsx';

describe('Rating Component', () => {
  it('renders without crashing', () => {
    render(<Rating value={3} onChange={() => {}} />);
    const radios = screen.getAllByRole('radio');
    const checkedRadios = radios.filter((button) => button.checked);

    expect(checkedRadios).toHaveLength(1);
    expect(checkedRadios[0]).toHaveAttribute('value', '3');
    expect(checkedRadios[0].checked).toBeTruthy();
  });

  it('calls onChange when value changes and is not read-only', () => {
    const handleChange = jest.fn();
    render(<Rating value={3} readOnly={false} onChange={handleChange} />);
    const radioButtons = screen.getAllByRole('radio');
    fireEvent.click(radioButtons[0]);

    expect(handleChange).toHaveBeenCalled();
  });

  it('does not call onChange when readOnly is true', () => {
    const handleChange = jest.fn();
    render(<Rating value={3} readOnly onChange={handleChange} />);
    const radioButtons = screen.getAllByRole('img');
    fireEvent.click(radioButtons[0]);

    expect(handleChange).not.toHaveBeenCalled();
  });
});
