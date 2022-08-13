import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_OPINIONS } from '../../../graphql/queries/opinion.js';
import useIsLogged from '../../../hooks/useIsLogged.jsx';
import Opinion from './opinion/Opinion.jsx';
import AddOpinionForm from './AddOpinionForm.jsx';
import AddingOpinionSuccessModal from '../../reusable/modals/AddingOpinionSuccessModal.jsx';
import AddingOpinionErrorModal from '../../reusable/modals/AddingOpinionErrorModal.jsx';

const Opinions = () => {
  const blockName = 'opinions';
  const isLogged = useIsLogged();
  const [isOpinionAdded, setIsOpinionAdded] = useState(false);
  const [isAddedOpinionError, setIsAddedOpinionError] = useState(false);
  const { loading, error, data } = useQuery(GET_OPINIONS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>error</h1>;

  const { opinions } = data;

  return (
    <div className={`main__${blockName} ${blockName}`}>
      <h2 className={`${blockName}__header`}>Opinie</h2>
      <div className={`${blockName}__opinion-list-wrapper`}>
        { opinions.map((opinion) => <Opinion opinionsData={opinion} />) }
      </div>
      {
        !isLogged && (
          <AddOpinionForm
            setIsOpinionAdded={setIsOpinionAdded}
            setIsAddedOpinionError={setIsAddedOpinionError}
          />
        )
      }
      { isOpinionAdded && <AddingOpinionSuccessModal /> }
      { isAddedOpinionError && <AddingOpinionErrorModal /> }
    </div>
  );
};

export default Opinions;
