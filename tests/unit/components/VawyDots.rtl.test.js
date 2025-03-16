import React from 'react';
import { render } from '@testing-library/react';
import VawyDots from 'components/VawyDots.jsx';

describe('VavyDots Component', () => {
  test('renders without crashing', () => {
    render(<VawyDots dotsCount={3} />);
  });

  test('renders the correct number of dots', () => {
    const { container } = render(<VawyDots dotsCount={5} />);

    expect(container.getElementsByClassName('dot').length).toBe(5);
  });
});
