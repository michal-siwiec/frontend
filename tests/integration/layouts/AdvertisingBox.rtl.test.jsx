import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import AdvertisingBox from 'layouts/AdvertisingBox.jsx';
import * as s3 from 'services/s3.js';
import { WIDTH_BREAKPOINTS } from 'data/breakpoints.js';

const setScreenWidth = (width) => {
  act(() => {
    window.innerWidth = width;
    window.dispatchEvent(new Event('resize'));
  });
};

jest.mock('services/s3.js', () => ({
  getSignedUrl: jest.fn()
}));

describe('AdvertisingBox', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders proper content', () => {
    setScreenWidth(WIDTH_BREAKPOINTS.xl);
    s3.getSignedUrl.mockReturnValue('https://images/construction-photos/paver.jpeg');

    render(<AdvertisingBox />);

    expect(screen.getByText('Największy sklep budowlany w Polsce')).toBeInTheDocument();
    expect(screen.getByText('Tysiące produktów wysokiej jakości')).toBeInTheDocument();
  });

  it('renders desktop image when screen is wide', () => {
    setScreenWidth(WIDTH_BREAKPOINTS.xl + 1);
    s3.getSignedUrl.mockReturnValue('https://images/construction-photos/paver.jpeg');

    render(<AdvertisingBox />);

    const backgroundImageDiv = document.querySelector('.advertising-box__background--picture');
    expect(backgroundImageDiv).toHaveStyle({
      backgroundImage: 'url(https://images/construction-photos/paver.jpeg)'
    });

    expect(s3.getSignedUrl).toHaveBeenCalledWith({
      key: 'images/construction-photos/paver.jpeg'
    });
  });

  it('renders mobile image when screen is narrow', () => {
    setScreenWidth(WIDTH_BREAKPOINTS.xl - 1);
    s3.getSignedUrl.mockReturnValue('https://images/construction-photos/building-house.jpeg');

    render(<AdvertisingBox />);

    const backgroundImageDiv = document.querySelector('.advertising-box__background--picture');
    expect(backgroundImageDiv).toHaveStyle({ backgroundImage: 'url(https://images/construction-photos/building-house.jpeg)' });
    expect(s3.getSignedUrl).toHaveBeenCalledWith({ key: 'images/construction-photos/building-house.jpeg' });
  });
});
