import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders';
import NotFound from 'pages/NotFound';

describe('NotFound component', () => {
  beforeEach(() => {
    renderWithProviders(
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/non-existing-page" element={<NotFound />} />
      </Routes>,
      { initialEntries: ['/non-existing-page'] }
    );
  });

  it('shows 404 page', () => {
    expect(screen.queryByText('Home Page')).not.toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Wygląda na to, że szukana przez Ciebie strona nie istnieje!')).toBeInTheDocument();
    expect(screen.getByText('Za chwilę zostaniesz przekierowany na stronę główną')).toBeInTheDocument();
  });

  it('redirects to main page after specified time', async () => {
    await waitFor(() => {
      expect(screen.getByText('Home Page')).toBeInTheDocument();
      expect(screen.queryByText('404')).not.toBeInTheDocument();
      expect(screen.queryByText('Wygląda na to, że szukana przez Ciebie strona nie istnieje!')).not.toBeInTheDocument();
      expect(screen.queryByText('Za chwilę zostaniesz przekierowany na stronę główną')).not.toBeInTheDocument();
    }, { timeout: 6000 });
  }, 7000);
});
