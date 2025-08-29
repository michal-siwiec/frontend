import React, { useState, useEffect } from 'react';
import { exact, bool } from 'prop-types';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import useScrollIntoElement from 'hooks/useScrollIntoElement.jsx';
import { GET_PRODUCTS } from 'graphql/queries/products.ts';
import { generateHeaderCaption } from 'services/products.ts';
import LoadingModal from 'components/modals/LoadingModal.jsx';
import ErrorModal from 'components/modals/ErrorModal.jsx';
import Product from 'components/product/Product.tsx';
import Pagination from 'components/Pagination.tsx';

const Products = ({ arePromoted }) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const blockName = 'products';
  const quantityPerPage = 5;
  const productType = searchParams.get('type');
  const headerCaption = generateHeaderCaption(arePromoted, productType);
  const [activePage, setActivePage] = useState(0);
  const [fetchingProductError, setFetchingProductError] = useState(false);
  const { loading, error, data } = useQuery(
    GET_PRODUCTS,
    {
      variables: {
        input: { promoted: arePromoted, type: productType, pagination: { page: activePage, quantityPerPage } }
      }
    }
  );

  const handlePaginationOnChange = (pageNumber) => setActivePage(pageNumber - 1);

  useScrollIntoElement({ scrollDependency: location.key, elementSelector: `.${blockName}__header` });
  useEffect(() => { if (error) { setFetchingProductError(true); } }, [error]);

  let content;

  if (loading) {
    content = <LoadingModal isOpen={loading} info="Trwa pobieranie produktów!" />;
  } else if (error) {
    content = <ErrorModal isOpen={fetchingProductError} handleOnClose={() => setFetchingProductError(false)} info="Nie udało się pobrać listy produktów" />;
  } else {
    const { productsDetails: { quantity, products } } = data;

    content = (
      <>
        <div className={`${blockName}__list`}>
          {
            products.map((product, index) => (
              <Product
                product={product}
                key={product.id}
                index={index}
                mode="main"
              />
            ))
          }
        </div>
        <Pagination
          activePage={activePage}
          onChange={handlePaginationOnChange}
          itemsQuantity={quantity}
          quantityPerPage={quantityPerPage}
        />
      </>
    );
  }

  return (
    <div className={`main__${blockName} ${blockName}`}>
      <h2 className={`${blockName}__header`}>
        {headerCaption}
      </h2>
      {content}
    </div>
  );
};

Products.propTypes = exact({ arePromoted: bool }).isRequired;
Products.defaultProps = { arePromoted: false };

export default Products;
