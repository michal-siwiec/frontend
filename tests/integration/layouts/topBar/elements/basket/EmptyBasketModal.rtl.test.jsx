import { screen, fireEvent } from '@testing-library/react';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.jsx';
import EmptyBasketModal from 'layouts/topBar/elements/basket/EmptyBasketModal.tsx';

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
    renderWithProviders(<EmptyBasketModal open handleOnClose={() => {}} />);

    expect(screen.getByText('Twój koszyk jest pusty!')).toBeInTheDocument();
    expect(screen.getByText('Dodaj swój pierwszy produkt!')).toBeInTheDocument();
  });

  it('navigates to / and calls handleOnClose when clicking "Dodaj swój pierwszy produkt!"', () => {
    const handleOnClose = jest.fn();

    renderWithProviders(<EmptyBasketModal open handleOnClose={handleOnClose} />);

    const button = screen.getByText('Dodaj swój pierwszy produkt!');
    fireEvent.mouseDown(button);

    expect(handleOnClose).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
