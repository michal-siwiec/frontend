import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from 'layouts/Footer.jsx';

// ✅ Mock only the low-level AWS-related dependencies
// jest.mock('services/s3', () => ({
//   getSignedUrl: jest.fn(() => 'mocked-logo-url'),
//   getObject: jest.fn(({ responseHandler }) => {
//     responseHandler(null, { Body: new Uint8Array([1, 2, 3]) });
//   }),
// }));

// // ✅ Mock file-saver to avoid actual download
// jest.mock('file-saver', () => ({
//   saveAs: jest.fn(),
// }));

// // ✅ Required for email/phone click simulation
// const setupWindowLocation = () => {
//   delete window.location;
//   window.location = { assign: jest.fn(), href: '', replace: jest.fn() };
// };

describe('Footer Integration Test (with low-level mocks)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // setupWindowLocation();
    // window.open = jest.fn(); // mock social media tab opening
  });

  const renderFooter = () => {
    render(
      <MemoryRouter>
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


  // it('clicking on privacy policy triggers PDF fetch', () => {
  //   renderFooter();
  //   fireEvent.mouseDown(screen.getByTestId('policy-privacy-label'));
  //   expect(require('services/s3').getObject).toHaveBeenCalledWith(
  //     expect.objectContaining({
  //       key: 'documents/polityka_prywatnosci.pdf',
  //     })
  //   );
  // });

  // it('clicking on shop rules triggers PDF fetch', () => {
  //   renderFooter();
  //   fireEvent.mouseDown(screen.getByTestId('shop-regulation-label'));
  //   expect(require('services/s3').getObject).toHaveBeenCalledWith(
  //     expect.objectContaining({
  //       key: 'documents/regulamin_sklepu.pdf',
  //     })
  //   );
  // });

  // it('hovering on privacy policy prompt shows and hides tooltip', async () => {
  //   renderFooter();
  //   const icon = screen.getByTestId('policy-privacy-prompt');
  //   fireEvent.mouseEnter(icon);
  //   expect(await screen.findByText(/Polityka prywatności/i)).toBeVisible();
  //   fireEvent.mouseLeave(icon);
  //   await waitFor(() =>
  //     expect(screen.getByText(/Polityka prywatności/i)).not.toBeVisible()
  //   );
  // });

  // it('email click triggers mailto link', () => {
  //   renderFooter();
  //   fireEvent.mouseDown(screen.getByTestId('email-contact-label'));
  //   expect(window.location).toEqual(expect.objectContaining({
  //     href: expect.stringContaining('mailto:')
  //   }));
  // });

  // it('phone click triggers tel link', () => {
  //   renderFooter();
  //   fireEvent.mouseDown(screen.getByTestId('phone-contact-label'));
  //   expect(window.location).toEqual(expect.objectContaining({
  //     href: expect.stringContaining('tel:')
  //   }));
  // });

  // it('social icons open correct URLs in new tab', () => {
  //   renderFooter();

  //   fireEvent.mouseDown(screen.getByTestId('facebook-icon'));
  //   expect(window.open).toHaveBeenCalledWith('https://www.facebook.com/', '_blank');

  //   fireEvent.mouseDown(screen.getByTestId('instagram-icon'));
  //   expect(window.open).toHaveBeenCalledWith('https://www.instagram.com/', '_blank');

  //   fireEvent.mouseDown(screen.getByTestId('youtube-icon'));
  //   expect(window.open).toHaveBeenCalledWith('https://www.youtube.com/', '_blank');

  //   fireEvent.mouseDown(screen.getByTestId('twitter-icon'));
  //   expect(window.open).toHaveBeenCalledWith('https://x.com/?lang=en', '_blank');
  // });
});
