import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.jsx';
import EmptyBasketModal from 'layouts/topBar/elements/basket/EmptyBasketModal.jsx';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');

  return {
    ...actual,
    useNavigate: () => mockNavigate
  };
});

describe('EmptyBasketModal', () => {
  it('renders modal correctly', () => {
    // TODO
    renderWithProviders(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <EmptyBasketModal open handleOnClose={() => {}} />
      </MemoryRouter>
    );

    expect(screen.getByText('Twój koszyk jest pusty!')).toBeInTheDocument();
    expect(screen.getByText('Dodaj swój pierwszy produkt!')).toBeInTheDocument();
  });

  it('navigates to / and calls handleOnClose when clicking "Dodaj swój pierwszy produkt!"', () => {
    const handleOnClose = jest.fn();

    // TODO
    renderWithProviders(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <EmptyBasketModal open handleOnClose={handleOnClose} />
      </MemoryRouter>
    );

    const button = screen.getByText('Dodaj swój pierwszy produkt!');
    fireEvent.mouseDown(button);

    expect(handleOnClose).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
