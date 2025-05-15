import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchEngine from 'layouts/topBar/elements/SearchEngine.jsx';

// TODO: Remove data-cy - this is unused

describe('SearchEngine', () => {
  it('renders component properly', () => {
    render(<SearchEngine />);

    const input = screen.getByPlaceholderText('Wyszukaj produktów');

    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
    expect(screen.queryByText('Wyszukiwarka produktów jest nie dostępna!')).not.toBeInTheDocument();
  });

  it('shows and hides tooltip on hover', () => {
    render(<SearchEngine />);

    const tooltipTrigger = screen.getByTestId('search-engine-prompt');

    expect(screen.queryByText('Wyszukiwarka produktów jest nie dostępna!')).not.toBeInTheDocument();

    fireEvent.mouseEnter(tooltipTrigger);
    expect(screen.getByText('Wyszukiwarka produktów jest nie dostępna!')).toBeInTheDocument();

    fireEvent.mouseLeave(tooltipTrigger);

    waitFor(() => {
      expect(screen.queryByText('Wyszukiwarka produktów jest nie dostępna!')).not.toBeInTheDocument();
    });
  });
});
