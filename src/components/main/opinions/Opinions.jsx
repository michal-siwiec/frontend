import React, { useState, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { isEmpty } from 'lodash';
import { GET_OPINIONS } from '../../../graphql/queries/opinion.js';
import useIsLogged from '../../../hooks/useIsLogged.jsx';
import Opinion from './Opinion.jsx';
import AddOpinionForm from './AddOpinionForm.jsx';
import AddingOpinionSuccessModal from '../../reusable/modals/AddingOpinionSuccessModal.jsx';
import AddingOpinionErrorModal from '../../reusable/modals/AddingOpinionErrorModal.jsx';

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

  const handleSetFocusOnMouseDown = () => {
    const timeToSetFocus = 0;
    // It'll not work without setTimeout
    setTimeout(() => textareaRef.current.focus(), timeToSetFocus);
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>error</h1>;

  const { opinions } = data;
  const opinionsEmpty = isEmpty(opinions);

  return (
    <div className={`main__${blockName} ${blockName}`}>
      {
        opinionsEmpty ? (
          <div className={`${blockName}__empty-opinions-wrapper`}>
            <h3 className={`${blockName}__empty-opinion-header`}>
              Niestety nie posiadamy jeszcze żadnych opini
            </h3>
            <span
              className={`${blockName}__empty-opinion-scroller`}
              onMouseDown={handleSetFocusOnMouseDown}
              role="button"
              tabIndex={0}
            >
              Podziel się z nami swoją!
            </span>
          </div>
        ) : (
          <div className={`${blockName}__opinion-list-wrapper`}>
            { opinions.map((opinion) => <Opinion opinionsData={opinion} />) }
          </div>
        )
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
      { isOpinionAdded && <AddingOpinionSuccessModal /> }
      { isAddedOpinionError && <AddingOpinionErrorModal /> }
    </div>
  );
};

export default Opinions;
