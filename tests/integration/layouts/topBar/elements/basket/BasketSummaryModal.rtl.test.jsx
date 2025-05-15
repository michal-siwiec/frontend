import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.jsx';
import BasketSummaryModal from 'layouts/topBar/elements/basket/BasketSummaryModal.jsx';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');

  return {
    ...actual,
    useNavigate: () => mockNavigate
  };
});

describe('BasketSummaryModal', () => {
  const preloadedState = {
    basket: {
      addedProducts: [
        {
          id: 'da97aa73-f0e4-4a17-9157-9f17454c73f3',
          quantity: 3,
          attributes: {
            id: 'da97aa73-f0e4-4a17-9157-9f17454c73f3',
            name: 'Bloczek Termalika',
            price: 124.99,
            availableQuantity: 1000,
            pictureKey: 'images/products/foundation_materials/bloczke_termalika.jpeg',
            pictureBucket: 'budoman-development'
          }
        }
      ]
    }
  };

  it('renders basket correctly', () => {
    // TODO
    renderWithProviders(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <BasketSummaryModal open handleOnClose={() => {}} />
      </MemoryRouter>,
      { preloadedState }
    );

    expect(screen.getByText('Twój koszyk')).toBeInTheDocument();
    expect(screen.getByText('Kontynuuj zakupy')).toBeInTheDocument();
    expect(screen.getByText('Bloczek Termalika')).toBeInTheDocument();
  });

  it('navigates to /order and calls handleOnClose when clicking "Kontynuuj zakupy"', () => {
    const handleOnClose = jest.fn();

    // TODO
    renderWithProviders(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <BasketSummaryModal open handleOnClose={handleOnClose} />
      </MemoryRouter>,
      { preloadedState }
    );

    const button = screen.getByText('Kontynuuj zakupy');
    fireEvent.mouseDown(button);

    expect(handleOnClose).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/order');
  });
});
