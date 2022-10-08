import React, { useState, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { isEmpty } from 'lodash';
import { GET_OPINIONS } from 'graphql/queries/opinion.js';
import useIsLogged from 'hooks/useIsLogged.jsx';
import AddingOpinionSuccessModal from 'components/modals/AddingOpinionSuccessModal.jsx';
import AddingOpinionErrorModal from 'components/modals/AddingOpinionErrorModal.jsx';
import Pagination from 'components/Pagination.jsx';
import OpinionsList from './OpinionsList.jsx';
import EmptyOpinionsList from './EmptyOpinionsList.jsx';
import AddOpinionForm from './AddOpinionForm.jsx';

const Opinions = () => {
  const blockName = 'opinions';
  const quantityPerPage = 2;
  const isLogged = useIsLogged();
  const [activePage, setActivePage] = useState(0);
  const [isOpinionAdded, setIsOpinionAdded] = useState(false);
  const [isAddedOpinionError, setIsAddedOpinionError] = useState(false);
  const textareaRef = useRef(null);
  const {
    loading,
    error,
    data,
    refetch
  } = useQuery(
    GET_OPINIONS,
    { variables: { input: { pagination: { page: activePage, quantityPerPage } } } }
  );

  // Tutaj trzeba zrobić dwa modale
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>error</h1>;

  const { opinionsDetails: { allOpinionsQuantity, opinions } } = data;
  const opinionsEmpty = isEmpty(opinions);

  const handlePaginationOnChange = (pageNumber) => setActivePage(pageNumber - 1);
  const closeAddedOpinionModal = () => setIsOpinionAdded(false);
  const closeAddedOpinionErrorModal = () => setIsAddedOpinionError(false);

  return (
    <div className={`main__${blockName} ${blockName}`}>
      {
        opinionsEmpty
          ? <EmptyOpinionsList textAreaRef={textareaRef} />
          : <OpinionsList opinions={opinions} />
      }
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
      <AddingOpinionSuccessModal
        isOpen={isOpinionAdded}
        handleOnClose={closeAddedOpinionModal}
      />
      <AddingOpinionErrorModal
        isOpen={isAddedOpinionError}
        handleOnClose={closeAddedOpinionErrorModal}
      />
      <Pagination
        activePage={activePage}
        onChange={handlePaginationOnChange}
        itemsQuantity={allOpinionsQuantity}
        quantityPerPage={quantityPerPage}
      />
    </div>
  );
};

export default Opinions;
