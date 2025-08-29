import { render, screen } from '@testing-library/react';
import ShadowedContainer from 'components/containers/ShadowedContainer.tsx';

describe('ShadowedContainer', () => {
  it('renders children correctly', () => {
    render(
      <ShadowedContainer>
        <p>Test content</p>
      </ShadowedContainer>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
