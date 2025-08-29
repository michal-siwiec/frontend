import { render } from '@testing-library/react';
import VawyDots from 'components/VawyDots.tsx';

describe('VavyDots Component', () => {
  it('renders without crashing', () => {
    render(<VawyDots dotsCount={3} />);
  });

  it('renders the correct number of dots', () => {
    const { container } = render(<VawyDots dotsCount={5} />);

    expect(container.getElementsByClassName('dot').length).toBe(5);
  });
});
