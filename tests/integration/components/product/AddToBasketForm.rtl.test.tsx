import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders';
import AddToBasketForm from 'components/product/AddToBasketForm';

describe('AddToBasketForm', () => {
  const mockProduct = {
    id: '6a9f1314-b8da-4044-bc4b-64fb364bb590',
    name: 'Mocownik łaty kominiarskiej',
    availableQuantity: 5,
    pictureBucket: 'budoman-development',
    pictureKey: 'images/products/roof_ accessories/mocownik_laty_kominiarskiej.jpeg',
    price: 149.99,
    __typename: 'ProductObject'
  };

  it('renders component successfully', () => {
    renderWithProviders(<AddToBasketForm product={mockProduct} />);

    const numberInput = screen.getByDisplayValue('1');
    const submitButton = screen.getByRole('button', { name: 'Dodaj do koszyka' });

    expect(numberInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('sets proper product quantity if is possible', () => {
    renderWithProviders(<AddToBasketForm product={mockProduct} />);

    const numberInput: HTMLInputElement = screen.getByDisplayValue('1');
    fireEvent.change(numberInput, { target: { value: '3' } });

    expect(numberInput.value).toBe('3');
  });

  it('sets max possible quantity when try to add more than available', () => {
    renderWithProviders(<AddToBasketForm product={mockProduct} />);

    const numberInput: HTMLInputElement = screen.getByDisplayValue('1');
    fireEvent.change(numberInput, { target: { value: '31' } });

    expect(numberInput.value).toBe('5');
  });

  it('submit successfully and resets quantity to 1', () => {
    renderWithProviders(<AddToBasketForm product={mockProduct} />);

    const numberInput: HTMLInputElement = screen.getByDisplayValue('1');
    const submitButton = screen.getByRole('button', { name: 'Dodaj do koszyka' });

    fireEvent.change(numberInput, { target: { value: '2' } });
    fireEvent.mouseDown(submitButton);

    expect(numberInput.value).toBe('1');
  });
});
