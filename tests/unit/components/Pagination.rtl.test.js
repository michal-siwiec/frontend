import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import Pagination from '../../../src/components/Pagination';

describe('Pagination Component', () => {
  const defaultProps = {
    activePage: 0,
    onChange: jest.fn(),
    itemsQuantity: 80,
    quantityPerPage: 10,
  };

  it('should not render if all items fit on one page', () => {
    render(
      <Pagination
        {...defaultProps}
        itemsQuantity={5}
        quantityPerPage={10}
      />
    );

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('should render pagination if items exceed quantityPerPage', () => {
    render(<Pagination {...defaultProps} />);

    expect(screen.queryByRole('navigation')).toBeInTheDocument();
  });

  it("should show proper elements on UI if items exceed quantityPerPage", () => {
    render(<Pagination {...defaultProps} />);

    const nav = screen.getByRole('navigation');
    const tilePage1 = within(nav).getByLabelText('Go to page number 1');
    const tilePage2 = within(nav).getByLabelText('Go to page number 2');
    const tilePage3 = within(nav).getByLabelText('Go to page number 3');
    const tilePage4 = within(nav).getByLabelText('Go to page number 4');
    const tilePage5 = within(nav).getByLabelText('Go to page number 5');
    const tileLastPage = within(nav).getByLabelText('Go to last page');
    const pageTiles = within(nav).getAllByLabelText(/Go to page number /);

    expect(tilePage1).toBeInTheDocument();
    expect(tilePage2).toBeInTheDocument();
    expect(tilePage3).toBeInTheDocument();
    expect(tilePage4).toBeInTheDocument();
    expect(tilePage5).toBeInTheDocument();
    expect(tileLastPage).toBeInTheDocument();
    expect(pageTiles.length).toBe(5);
  });

  it('should call onChange when a page number is clicked', () => {
    render(<Pagination {...defaultProps} />);

    const nav = screen.getByRole('navigation');
    const tilePage2 = within(nav).getByLabelText('Go to page number 2');
    fireEvent.click(tilePage2);

    expect(defaultProps.onChange).toHaveBeenCalled();
  });
});
