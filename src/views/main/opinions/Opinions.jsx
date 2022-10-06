import React, { useState, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { isEmpty } from 'lodash';
import { GET_OPINIONS } from 'graphql/queries/opinion.js';
import useIsLogged from 'hooks/useIsLogged.jsx';
import AddingOpinionSuccessModal from 'components/modals/AddingOpinionSuccessModal.jsx';
import AddingOpinionErrorModal from 'components/modals/AddingOpinionErrorModal.jsx';
import OpinionsList from './OpinionsList.jsx';
import EmptyOpinionsList from './EmptyOpinionsList.jsx';
import AddOpinionForm from './AddOpinionForm.jsx';

const Opinions = () => {
  const blockName = 'opinions';
  const isLogged = useIsLogged();
  const [isOpinionAdded, setIsOpinionAdded] = useState(false);
  const [isAddedOpinionError, setIsAddedOpinionError] = useState(false);
  const {
    loading,
    error,
    data,
    refetch
  } = useQuery(GET_OPINIONS);
  const textareaRef = useRef(null);

  // Tutaj trzeba zrobić dwa modale
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>error</h1>;

  const { opinions } = data;
  const opinionsEmpty = isEmpty(opinions);

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
        !isLogged && (
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
    </div>
  );
};

export default Opinions;
