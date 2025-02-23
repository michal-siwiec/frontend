import { isEmpty } from 'lodash';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.js';

const handleAddOpinionValidation = ({ opinion }) => {
  const isOpinionValid = !isEmpty(opinion);

  return {
    opinionError: !isOpinionValid && VALIDATION_ERROR_MESSAGES.opinion,
    validationStatus: isOpinionValid
  };
};

export default handleAddOpinionValidation;
