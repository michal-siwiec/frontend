import React from 'react';
import { exact, func, number } from 'prop-types';
import { default as ReactJSPagination } from 'react-js-pagination';

const Pagination = ({
  activePage,
  onChange,
  itemsQuantity,
  quantityPerPage
}) => (
  <ReactJSPagination
    activePage={activePage}
    itemsCountPerPage={quantityPerPage}
    totalItemsCount={itemsQuantity}
    pageRangeDisplayed={5}
    onChange={onChange}
  />
);

Pagination.propTypes = exact({
  activePage: number.isRequired,
  onChange: func.isRequired,
  itemsQuantity: number.isRequired,
  quantityPerPage: number.isRequired
}).isRequired;

export default Pagination;
