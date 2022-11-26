import React from 'react';
import { exact, func, number } from 'prop-types';
import { default as ReactJSPagination } from 'react-js-pagination';

const Pagination = ({ activePage, onChange, itemsQuantity, quantityPerPage }) => {
  const blockName = 'pagination';
  const isOnlyOnePage = itemsQuantity <= quantityPerPage;

  if (isOnlyOnePage) return null;

  return (
    <div className={blockName}>
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

Pagination.propTypes = exact({
  activePage: number.isRequired,
  onChange: func.isRequired,
  itemsQuantity: number.isRequired,
  quantityPerPage: number.isRequired
}).isRequired;

export default Pagination;
