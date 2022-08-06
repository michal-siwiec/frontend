import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_OPINIONS } from '../../../graphql/queries/opinion.js';
import { ADD_OPINION } from '../../../graphql/mutations/opinion.js';
import useIsLogged from '../../../hooks/useIsLogged.jsx';
import AddedOpinionModal from '../../reusable/modals/addedOpinionModal.jsx';
import Rating from '../../reusable/Rating.jsx';

const Opinions = () => {
  const opinionsBlockName = 'opinions';
  const opinionBlockName = 'opinion';
  const addOpinionBlockName = 'add-opinion';
  const theHighestMark = 5;

  const isLogged = useIsLogged();
  const [addedOpinion, setAddedOpinion] = useState('');
  const [rating, setRating] = useState(theHighestMark);
  const { loading: loadingGetOpinions, error: errorGetOpinions, data: dataGetOpinions } = useQuery(GET_OPINIONS);
  const [addOpinion, { data: addedOpinionData }] = useMutation(ADD_OPINION);

  const handleAddOpinionOnChange = ({ target: { value } }) => {
    setAddedOpinion(value);
  };

  const handleSetRating = ({ target: { value } }) => {
    const numberSystem = 10;
    setRating(parseInt(value, numberSystem));
  };

  const handleAddOpinionSubmit = () => {
    addOpinion(
      { variables: { input: { content: addedOpinion, mark: rating, userId: isLogged.userID } } }
    );
  };

  if (loadingGetOpinions) return <h1>Loading...</h1>;
  if (errorGetOpinions) return <h1>error</h1>;

  return (
    <div className={`main__${opinionsBlockName} ${opinionsBlockName}`}>
      <h2 className={`${opinionsBlockName}__header`}>Opinie</h2>
      <div className={`${opinionsBlockName}__wrapper-list`}>
        {
          dataGetOpinions.opinions.map(({
            content,
            mark,
            updatedAt,
            user: { email }
          }) => (
            <div
              className={`${opinionBlockName}`}
              key={`${opinionBlockName}-${content}`}
            >
              <div className={`${opinionBlockName}__picture`} />
              <div className={`${opinionBlockName}__user-name`}>{email}</div>
              <div className={`${opinionBlockName}__user-email`}>{email}</div>
              <div className={`${opinionBlockName}__updated-at`}>{updatedAt}</div>
              <div className={`${opinionBlockName}__mark`}>
                <Rating value={mark} readOnly />
              </div>
              <div className={`${opinionBlockName}__content-wrapper`}>
                <p className={`${opinionBlockName}__content`}>{content}</p>
              </div>
            </div>
          ))
        }
      </div>
      {
        !isLogged && (
          <div className={`${addOpinionBlockName}__wrapper`}>
            <h2 className={`${addOpinionBlockName}__header`}>Dodaj opinie</h2>
            <textarea
              className={`${addOpinionBlockName}__textarea`}
              value={addedOpinion}
              onChange={handleAddOpinionOnChange}
            />
            <Rating value={rating} readOnly={false} onChange={handleSetRating} />
            <div>
              <input
                type="submit"
                value="Wyślij"
                className={`${addOpinionBlockName}__input-submit`}
                onClick={handleAddOpinionSubmit}
              />
            </div>
          </div>
        )
      }
      { addedOpinionData && <AddedOpinionModal /> }
    </div>
  );
};

export default Opinions;
