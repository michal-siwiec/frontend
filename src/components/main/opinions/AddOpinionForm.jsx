import React, { Fragment, useState, useEffect } from 'react';
import { exact, func } from 'prop-types';
import { useMutation } from '@apollo/client';
import { ADD_OPINION } from '../../../graphql/mutations/opinion.js';
import ValidationLoginFormHandler from '../../../validators/validationAddOpinionFormHandler.js';
import FormContainer from '../../reusable/containers/FormContainer.jsx';
import Rating from '../../reusable/various/Rating.jsx';
import TextArea from '../../reusable/inputs/TextArea.jsx';
import SubmitButton from '../../reusable/buttons/SubmitButton.jsx';

const AddOpinionForm = ({ setIsOpinionAdded, setIsAddedOpinionError }) => {
  const theHighestMark = 5;
  const [rating, setRating] = useState(theHighestMark);
  const [opinionValidationError, setOpinionValidationError] = useState('');
  const [addedOpinion, setAddedOpinion] = useState('');
  const [addOpinion, { data, error }] = useMutation(ADD_OPINION);

  const handleAddOpinionOnChange = ({ target: { value } }) => {
    setAddedOpinion(value);
  };

  const handleSetRating = ({ target: { value } }) => {
    const numberSystem = 10;
    const parsedValue = parseInt(value, numberSystem);

    setRating(parsedValue);
  };

  const handleAddOpinionSubmit = () => {
    const { opinionError, validationStatus } = new ValidationLoginFormHandler(addedOpinion).call();

    setOpinionValidationError(opinionError);
    if (!validationStatus) return;

    addOpinion(
      // { variables: { input: { content: addedOpinion, mark: rating, userId: isLogged.userID } } }
      { variables: { input: { content: addedOpinion, mark: rating, userId: 'aea46a11-d778-49cb-b7a1-c90dfd9afe71' } } }
    );
  };

  useEffect(() => {
    if (data) return setIsOpinionAdded(true);
    if (error) return setIsAddedOpinionError(true);
  }, [data, error]);

  return (
    <FormContainer
      header="Dodaj opinie"
      form={(
        <Fragment>
          <TextArea
            value={addedOpinion}
            onChange={handleAddOpinionOnChange}
            classNames="text-area--add-opinion"
            placeholder="Dodaj opinię"
            validationError={opinionValidationError}
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
  );
};

AddOpinionForm.propTypes = exact({
  setIsOpinionAdded: func.isRequired,
  setIsAddedOpinionError: func.isRequired
}).isRequired;

export default AddOpinionForm;
