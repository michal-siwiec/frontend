import React, { Fragment, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_OPINIONS } from '../../../graphql/queries/opinion.js';
import { ADD_OPINION } from '../../../graphql/mutations/opinion.js';
import useIsLogged from '../../../hooks/useIsLogged.jsx';
import AddedOpinionModal from '../../reusable/modals/addedOpinionModal.jsx';
import Rating from '../../reusable/Rating.jsx';
import FormContainer from '../../reusable/containers/FormContainer.jsx';
import TextArea from '../../reusable/inputs/TextArea.jsx';
import SubmitButton from '../../reusable/buttons/SubmitButton.jsx';

const Opinions = () => {
  const opinionsBlockName = 'opinions';
  const opinionBlockName = 'opinion';
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
      // { variables: { input: { content: addedOpinion, mark: rating, userId: isLogged.userID } } }
      { variables: { input: { content: addedOpinion, mark: rating, userId: 'a0ca8305-c8cc-45fd-8e12-2408c659840d' } } }
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
          <FormContainer
            header="Dodaj opinie"
            form={(
              <Fragment>
                <TextArea
                  value={addedOpinion}
                  onChange={handleAddOpinionOnChange}
                  classNames="text-area--add-opinion"
                  placeholder="Dodaj opinię"
                />
                <Rating
                  value={rating}
                  readOnly={false}
                  onChange={handleSetRating}
                  classes="rating--add-opinion"
                />
                <SubmitButton
                  onMouseDown={handleAddOpinionSubmit}
                  value="Wyślij"
                  classNames="button--add-opinion"
                />
              </Fragment>
            )}
          />
        )
      }
      { addedOpinionData && <AddedOpinionModal /> }
    </div>
  );
};

export default Opinions;
