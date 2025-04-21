import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithProviders from '../../helpers/renderWithProviders.jsx'; // TODO - fix path
import AddToBasketForm from 'components/product/AddToBasketForm.jsx';

describe('AddToBasketForm', () => {
  const mockProduct = { id: '123', name: 'Test Product', picturePath: 'test.jpg', availableQuantity: 5 };

  it('renders component successfully', () => {
    renderWithProviders(<AddToBasketForm product={mockProduct} />);

    const numberInput = screen.getByDisplayValue('1');
    const submitButton = screen.getByRole('button', { name: 'Dodaj do koszyka' });

    expect(numberInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('sets proper product quantity if is possible', () => {
    renderWithProviders(<AddToBasketForm product={mockProduct} />);

    const numberInput = screen.getByDisplayValue('1');
    fireEvent.change(numberInput, { target: { value: '3' } });

    expect(numberInput.value).toBe('3');
  });

  it('sets max possible quantity when try to add more than available', () => {
    renderWithProviders(<AddToBasketForm product={mockProduct} />);

    const numberInput = screen.getByDisplayValue('1');
    fireEvent.change(numberInput, { target: { value: '31' } });

    expect(numberInput.value).toBe('5');
  });

  it('submit successfully and resets quantity to 1', () => {
    renderWithProviders(<AddToBasketForm product={mockProduct} />);

    const numberInput = screen.getByDisplayValue('1');
    const submitButton = screen.getByRole('button', { name: 'Dodaj do koszyka' });

    fireEvent.change(numberInput, { target: { value: '2' } });
    fireEvent.mouseDown(submitButton);

    expect(numberInput.value).toBe('1');
  });
});
