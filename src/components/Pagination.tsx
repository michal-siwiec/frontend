import React from 'react';
import { default as ReactJSPagination } from 'react-js-pagination';

type PaginationProps = {
  activePage: number,
  itemsQuantity: number,
  quantityPerPage: number,
  onChange: () => void
};

const Pagination = ({ activePage, onChange, itemsQuantity, quantityPerPage }: PaginationProps) => {
  const blockName = 'pagination';
  const isOnlyOnePage = itemsQuantity <= quantityPerPage;

  if (isOnlyOnePage) return null;

  return (
    <div className={blockName} role="navigation">
      <ReactJSPagination
        activePage={activePage + 1}
        itemsCountPerPage={quantityPerPage}
        totalItemsCount={itemsQuantity}
        pageRangeDisplayed={5}
        onChange={onChange}
        innerClass={`${blockName}__list`}
        itemClass={`${blockName}__list-item`}
        activeClass={`${blockName}__list-item--active`}
        activeLinkClass={`${blockName}__item-link--active`}
        hideNavigation
        hideDisabled
      />
    </div>
  );
};

export default Pagination;
