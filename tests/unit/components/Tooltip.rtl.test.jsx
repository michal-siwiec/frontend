import { render, screen } from '@testing-library/react';
import Tooltip from 'components/Tooltip.tsx';

describe('Tooltip Component', () => {
  it('renders without crashing', () => {
    render(
      <Tooltip open headerText="Test Header">
        <button type="button">Hover me</button>
      </Tooltip>
    );
  });

  it('displays content when open', () => {
    render(
      <Tooltip open headerText="Test Header" secondaryText="Test Secondary">
        <button type="button">Hover me</button>
      </Tooltip>
    );

    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.getByText('Test Secondary')).toBeInTheDocument();
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('does not show content when is close', () => {
    render(
      <Tooltip open={false} headerText="Test Header" secondaryText="Test Secondary">
        <button type="button">Hover me</button>
      </Tooltip>
    );

    const children = screen.queryByText('Hover me');

    expect(screen.queryByText('Test Header')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Secondary')).not.toBeInTheDocument();
    // MUI generate this inside DOM with 0 size so it's invisible
    expect(children.getBoundingClientRect().width).toBe(0);
    expect(children.getBoundingClientRect().height).toBe(0);
  });
});
