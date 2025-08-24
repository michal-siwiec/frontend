import React, { Fragment, useState } from 'react';
import { exact, func, element } from 'prop-types';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { ADD_OPINION } from 'graphql/mutations/opinion.js';
import { handleAddOpinionValidation } from 'services/opinions.ts';
import FormContainer from 'components/containers/FormContainer.jsx';
import Rating from 'components/Rating.jsx';
import TextArea from 'components/inputs/TextArea.jsx';
import SubmitButton from 'components/SubmitButton.jsx';

const AddOpinionForm = ({
  setIsOpinionAdded,
  setIsAddedOpinionError,
  textareaRef,
  refetchOpinions
}) => {
  const theHighestMark = 5;
  const userId = useSelector((store) => store.user.loggedUserId);
  const [rating, setRating] = useState(theHighestMark);
  const [opinionValidationError, setOpinionValidationError] = useState('');
  const [addedOpinion, setAddedOpinion] = useState('');
  const [addOpinion] = useMutation(ADD_OPINION, {
    onCompleted: () => {
      refetchOpinions();
      clearForm();
      setIsOpinionAdded(true);
    },
    onError: () => setIsAddedOpinionError(true)
  });

  const handleAddOpinionOnChange = ({ target: { value } }) => setAddedOpinion(value);

  const handleSetRating = ({ target: { value } }) => {
    const numberSystem = 10;
    const parsedValue = parseInt(value, numberSystem);

    setRating(parsedValue);
  };

  const handleAddOpinionSubmit = () => {
    const { opinionError, validationStatus } = handleAddOpinionValidation({ opinion: addedOpinion });

    setOpinionValidationError(opinionError);
    if (!validationStatus) return;

    addOpinion({ variables: { input: { content: addedOpinion, mark: rating, userId } } });
  };

  const clearForm = () => {
    setAddedOpinion('');
    setRating(theHighestMark);
  };

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
            textareaRef={textareaRef}
            validationError={opinionValidationError}
            dataTestId="opinion-textarea"
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
            dataTestId="add-opinion-submit-button"
          />
        </Fragment>
      )}
    />
  );
};

AddOpinionForm.propTypes = exact({
  setIsOpinionAdded: func.isRequired,
  setIsAddedOpinionError: func.isRequired,
  textareaRef: element.isRequired,
  refetchOpinions: func.isRequired
}).isRequired;

export default AddOpinionForm;
