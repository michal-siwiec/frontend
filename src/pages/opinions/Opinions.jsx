import React, { useState, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { isEmpty } from 'lodash';
import { GET_OPINIONS } from 'graphql/queries/opinion.ts';
import useIsLogged from 'hooks/useIsLogged.jsx';
import LoadingModal from 'components/modals/LoadingModal.jsx';
import SuccessModal from 'components/modals/SuccessModal.jsx';
import ErrorModal from 'components/modals/ErrorModal.jsx';
import Pagination from 'components/Pagination.tsx';
import OpinionsList from './OpinionsList.jsx';
import EmptyOpinionsList from './EmptyOpinionsList.jsx';
import AddOpinionForm from './AddOpinionForm.jsx';

const Opinions = () => {
  const blockName = 'opinions';
  const quantityPerPage = 2;
  const isLogged = useIsLogged();
  const textareaRef = useRef(null);
  const [activePage, setActivePage] = useState(0);
  const [isOpinionAdded, setIsOpinionAdded] = useState(false);
  const [isAddedOpinionError, setIsAddedOpinionError] = useState(false);
  const { loading, error, data, refetch } = useQuery(
    GET_OPINIONS,
    { variables: { input: { pagination: { page: activePage, quantityPerPage } } } }
  );

  const handlePaginationOnChange = (pageNumber) => setActivePage(pageNumber - 1);

  if (loading) return <LoadingModal isOpen={loading} info="Trwa pobieranie opini!" />;
  if (error) return <h1>error</h1>;

  const { opinionsDetails: { allOpinionsQuantity, opinions } } = data;

  return (
    <div className={`main__${blockName} ${blockName}`}>
      {
        isEmpty(opinions)
          ? <EmptyOpinionsList textAreaRef={textareaRef} />
          : <OpinionsList opinions={opinions} />
      }
      <Pagination
        activePage={activePage}
        onChange={handlePaginationOnChange}
        itemsQuantity={allOpinionsQuantity}
        quantityPerPage={quantityPerPage}
      />
      {
        isLogged && (
          <AddOpinionForm
            setIsOpinionAdded={setIsOpinionAdded}
            setIsAddedOpinionError={setIsAddedOpinionError}
            textareaRef={textareaRef}
            refetchOpinions={refetch}
          />
        )
      }
      <SuccessModal
        isOpen={isOpinionAdded}
        handleOnClose={() => setIsOpinionAdded(false)}
        info="Dziękujemy za dodanie opini!"
      />
      <ErrorModal
        isOpen={isAddedOpinionError}
        handleOnClose={() => setIsAddedOpinionError(false)}
        info="Niestety nie udało się dodać nowej opini."
      />
    </div>
  );
};

export default Opinions;
