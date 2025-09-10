import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders';
import { generatePreloadedState } from 'tests/integration/helpers/preloadedState';
import ThankYouPage from 'pages/ThankYouPage';
import fetchFileOnLocalFileSystem from 'services/fetchFileOnLocalFileSystem';

jest.mock('services/fetchFileOnLocalFileSystem.ts', () => jest.fn());

describe('ThankYouPage', () => {
  it('renders thank you message and payment info if payment method is traditional transfer', () => {
    renderWithProviders(<ThankYouPage />, { preloadedState: generatePreloadedState({ userStatePresent: true, orderStatePresent: true }) });

    expect(screen.getByText('Dziękujemy za dokonanie zakupu!')).toBeInTheDocument();
    expect(screen.getByText('Prosimy o dokonanie płatności według poniszych danych:')).toBeInTheDocument();
    expect(screen.getByText('Kwota do zapłaty:')).toBeInTheDocument();
    expect(screen.getByText('199.99 zł')).toBeInTheDocument();
    expect(screen.getByText('Numer konta:')).toBeInTheDocument();
    expect(screen.getByText('39 1240 6960 4539 1123 2002 9161')).toBeInTheDocument();
    expect(screen.getByText('Tytuł przelewu:')).toBeInTheDocument();
    expect(screen.getByText('Zamówienie da97aa73-f0e4-4a17-9157-9f17454c73f3 - Budoman')).toBeInTheDocument();
    expect(screen.getByText('Nazwa odbiorcy:')).toBeInTheDocument();
    expect(screen.getByText('Budoman')).toBeInTheDocument();
    expect(screen.getByText('Adres odbiorcy:')).toBeInTheDocument();
    expect(screen.getByText('Żywiec 34-300, Beskidzka 50')).toBeInTheDocument();
    expect(screen.getByText('Pobierz fakturę w formacie PDF')).toBeInTheDocument();
  });

  it('does not render payment info if payment method is not traditional_transfer', () => {
    const state = { ...generatePreloadedState({ userStatePresent: true, orderStatePresent: true }) };
    state.order.paymentMethod = 'cashPayment';

    renderWithProviders(<ThankYouPage />, { preloadedState: state });

    expect(screen.getByText('Dziękujemy za dokonanie zakupu!')).toBeInTheDocument();
    expect(screen.queryByText('Prosimy o dokonanie płatności według poniszych danych:')).not.toBeInTheDocument();
    expect(screen.queryByText('Kwota do zapłaty:')).not.toBeInTheDocument();
    expect(screen.queryByText('199.99 zł')).not.toBeInTheDocument();
    expect(screen.queryByText('Numer konta:')).not.toBeInTheDocument();
    expect(screen.queryByText('39 1240 6960 4539 1123 2002 9161')).not.toBeInTheDocument();
    expect(screen.queryByText('Tytuł przelewu:')).not.toBeInTheDocument();
    expect(screen.queryByText('Zamówienie da97aa73-f0e4-4a17-9157-9f17454c73f3 - Budoman')).not.toBeInTheDocument();
    expect(screen.queryByText('Nazwa odbiorcy:')).not.toBeInTheDocument();
    expect(screen.queryByText('Budoman')).not.toBeInTheDocument();
    expect(screen.queryByText('Adres odbiorcy:')).not.toBeInTheDocument();
    expect(screen.queryByText('Żywiec 34-300, Beskidzka 50')).not.toBeInTheDocument();
    expect(screen.getByText('Pobierz fakturę w formacie PDF')).toBeInTheDocument();
  });

  it('calls fetchFileOnLocalFileSystem with correct arguments on button click', () => {
    renderWithProviders(<ThankYouPage />, { preloadedState: generatePreloadedState({ userStatePresent: true, orderStatePresent: true }) });

    fireEvent.mouseDown(screen.getByText('Pobierz fakturę w formacie PDF'));

    expect(fetchFileOnLocalFileSystem).toHaveBeenCalledWith(
      'users/0c1069c7-8e77-4749-bc4b-e308c6679d1c/invoices/da97aa73-f0e4-4a17-9157-9f17454c73f3.pdf',
      'Faktura za zamówienie: da97aa73-f0e4-4a17-9157-9f17454c73f3'
    );
  });
});
