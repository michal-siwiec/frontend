import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckBox from 'components/inputs/CheckBox.jsx';

describe('CheckBox', () => {
  it('renders properly with label', () => {
    render(
      <CheckBox
        label={<span>Custom Label</span>}
        onChange={() => {}}
        checked={false}
      />
    );

    expect(screen.getByText('Custom Label')).toBeInTheDocument();
  });

  it('calls onChange when clicked', () => {
    const handleChange = jest.fn();

    render(
      <CheckBox
        label="Click me"
        onChange={handleChange}
        checked={false}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('reflects the checked state', () => {
    const { rerender } = render(
      <CheckBox
        label="Toggle"
        onChange={() => {}}
        checked={false}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    rerender(
      <CheckBox
        label="Toggle"
        onChange={() => {}}
        checked={true}
      />
    );

    expect(checkbox).toBeChecked();
  });
});
