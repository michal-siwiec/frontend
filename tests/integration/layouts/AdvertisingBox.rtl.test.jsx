import { render, screen } from '@testing-library/react';
import AdvertisingBox from 'layouts/AdvertisingBox.tsx';
import * as s3 from 'services/s3.ts';
import { WIDTH_BREAKPOINTS } from 'data/breakpoints.ts';
import { resizeWindow } from 'tests/helpers/domUtils.js';

jest.mock('services/s3.ts', () => ({
  getSignedUrl: jest.fn()
}));

describe('AdvertisingBox', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders proper content', () => {
    resizeWindow(WIDTH_BREAKPOINTS.xl);
    s3.getSignedUrl.mockReturnValue('https://images/construction-photos/paver.jpeg');

    render(<AdvertisingBox />);

    expect(screen.getByText('Największy sklep budowlany w Polsce')).toBeInTheDocument();
    expect(screen.getByText('Tysiące produktów wysokiej jakości')).toBeInTheDocument();
  });

  it('renders desktop image when screen is wide', () => {
    resizeWindow(WIDTH_BREAKPOINTS.xl + 1);
    s3.getSignedUrl.mockReturnValue('https://images/construction-photos/paver.jpeg');

    render(<AdvertisingBox />);

    const backgroundImageDiv = document.querySelector('.advertising-box__background--picture');
    expect(backgroundImageDiv).toHaveStyle({
      backgroundImage: 'url(https://images/construction-photos/paver.jpeg)'
    });

    expect(s3.getSignedUrl).toHaveBeenCalledWith('images/construction-photos/paver.jpeg');
  });

  it('renders mobile image when screen is narrow', () => {
    resizeWindow(WIDTH_BREAKPOINTS.xl - 1);
    s3.getSignedUrl.mockReturnValue('https://images/construction-photos/building-house.jpeg');

    render(<AdvertisingBox />);

    const backgroundImageDiv = document.querySelector('.advertising-box__background--picture');
    expect(backgroundImageDiv).toHaveStyle({ backgroundImage: 'url(https://images/construction-photos/building-house.jpeg)' });
    expect(s3.getSignedUrl).toHaveBeenCalledWith('images/construction-photos/building-house.jpeg');
  });
});
