import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from 'layouts/Footer.tsx';
import fetchFileOnLocalFileSystem from 'services/fetchFileOnLocalFileSystem.ts';

jest.mock('services/fetchFileOnLocalFileSystem', () => jest.fn());

describe('Footer', () => {
  const renderFooter = () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Footer />
      </MemoryRouter>
    );
  };

  it('renders proper elements', () => {
    renderFooter();

    expect(screen.getByAltText('Budoman-logo')).toBeInTheDocument();
    expect(screen.getByText('ul. Przykładowa 5, 00-000 Warszawa')).toBeInTheDocument();
    expect(screen.getByText('Polityka prywatności')).toBeInTheDocument();
    expect(screen.getByText('Regulamin sklepu')).toBeInTheDocument();
    expect(screen.getByText('Produkty')).toBeInTheDocument();
    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('Telefon:')).toBeInTheDocument();
    expect(screen.getByText('Social media')).toBeInTheDocument();
    expect(screen.getByText('Copyright © 2022 The GraphQL Foundation. All rights reserved.')).toBeInTheDocument();
  });

  it('should redirect to main page after clicking logo', () => {
    renderFooter();

    const logoLink = screen.getByAltText('Budoman-logo').closest('a');
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('should redirect to products page after clicking one of them', () => {
    renderFooter();

    expect(screen.getByText('Narzędzia').closest('a')).toHaveAttribute('href', '/products?type=tools');
    expect(screen.getByText('Chemia budowlana').closest('a')).toHaveAttribute('href', '/products?type=constructionChemicals');
    expect(screen.getByText('Schody').closest('a')).toHaveAttribute('href', '/products?type=stairway');
    expect(screen.getByText('Strefa dachu').closest('a')).toHaveAttribute('href', '/products?type=roofZone');
    expect(screen.getByText('Strefa fundamentu').closest('a')).toHaveAttribute('href', '/products?type=foundationZone');
  });

  it('should trigger mailto link after clicking email address', () => {
    renderFooter();

    expect(screen.getByText('siwiec.michal724@gmail.com')).toHaveAttribute('href', 'mailto:siwiec.michal724@gmail.com');
  });

  it('should trigger tel link after clicking phone number', () => {
    renderFooter();

    expect(screen.getByText('724 131 140')).toHaveAttribute('href', 'tel:724131140');
  });

  it('should open social media pages after clicking in logos', () => {
    renderFooter();

    expect(screen.getByTestId('facebook-link')).toHaveAttribute('href', 'https://www.facebook.com/');
    expect(screen.getByTestId('instagram-link')).toHaveAttribute('href', 'https://www.instagram.com/');
    expect(screen.getByTestId('youtube-link')).toHaveAttribute('href', 'https://www.youtube.com/');
    expect(screen.getByTestId('twitter-link')).toHaveAttribute('href', 'https://x.com/?lang=en');
  });

  it("fetches privacy policy document after click in 'Polityka prywatności'", () => {
    renderFooter();

    fireEvent.mouseDown(screen.getByText('Polityka prywatności'));

    expect(fetchFileOnLocalFileSystem).toHaveBeenCalledWith('documents/polityka_prywatnosci.pdf', 'Polityka prywatności.pdf');
  });

  it("fetches shop rules document after click in 'Regulamin sklepu'", () => {
    renderFooter();

    fireEvent.mouseDown(screen.getByText('Regulamin sklepu'));

    expect(fetchFileOnLocalFileSystem).toHaveBeenCalledWith('documents/regulamin_sklepu.pdf', 'Regulamin sklepu.pdf');
  });

  it('shows and hides privacy policy tooltip', async () => {
    renderFooter();

    await waitFor(() => {
      fireEvent.mouseEnter(screen.getByTestId('policy-privacy-prompt'));
      expect(screen.queryByText(/Polityka prywatności – dokument umieszczany na witrynie internetowej/)).toBeInTheDocument();
    });

    await waitFor(() => {
      fireEvent.mouseLeave(screen.getByTestId('policy-privacy-prompt'));
      expect(screen.queryByText(/Polityka prywatności – dokument umieszczany na witrynie internetowej/)).not.toBeInTheDocument();
    });
  });

  it('shows and hides shop rules tooltip', async () => {
    renderFooter();

    await waitFor(() => {
      fireEvent.mouseEnter(screen.getByTestId('shop-regulation-prompt'));
      expect(screen.queryByText(/Regulamin sklepu internetowego to zbiór zasad i norm, regulujących procesy/)).toBeInTheDocument();
    });

    await waitFor(() => {
      fireEvent.mouseLeave(screen.getByTestId('shop-regulation-prompt'));
      expect(screen.queryByText(/Regulamin sklepu internetowego to zbiór zasad i norm, regulujących procesy/)).not.toBeInTheDocument();
    });
  });
});
