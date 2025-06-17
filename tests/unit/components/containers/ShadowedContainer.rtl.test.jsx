import React from 'react';
import { render, screen } from '@testing-library/react';
import ShadowedContainer from 'components/containers/ShadowedContainer.jsx';

describe('ShadowedContainer', () => {
  it('renders children correctly', () => {
    render(
      <ShadowedContainer dataCy="shadowed-container">
        <p>Test content</p>
      </ShadowedContainer>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
