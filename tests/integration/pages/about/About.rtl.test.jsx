import { render, screen } from '@testing-library/react';
import { resizeWindow } from 'tests/helpers/domUtils.js';
import About from 'pages/about/About.jsx';
import useFetchUrl from 'hooks/useFetchUrl.jsx';
import { WIDTH_BREAKPOINTS } from 'data/breakpoints.js';

jest.mock('hooks/useFetchUrl', () => ({
  __esModule: true,
  default: jest.fn()
}));

describe('About', () => {
  const setup = (screenWidth) => {
    jest.clearAllMocks();
    useFetchUrl.mockReturnValue('test-image.jpg');
    resizeWindow(screenWidth);
    render(<About />);
  };

  it('renders correctly with DesktopManagers on desktop', () => {
    setup(WIDTH_BREAKPOINTS.xl + 1);

    expect(screen.getByText(/Początki sklepu budowlanego/i)).toBeInTheDocument();
    expect(screen.getByTestId('about-picture-container')).toHaveStyle('background-image: url(test-image.jpg)');
    expect(screen.getByTestId('desktop-menagers-container')).toBeInTheDocument();
  });

  it('renders correctly with MobileManagers on mobile', () => {
    setup(WIDTH_BREAKPOINTS.xl - 1);

    expect(screen.getByText(/Początki sklepu budowlanego/i)).toBeInTheDocument();
    expect(screen.getByTestId('about-picture-container')).toHaveStyle('background-image: url(test-image.jpg)');
    expect(screen.getByTestId('mobile-menagers-container')).toBeInTheDocument();
  });
});
