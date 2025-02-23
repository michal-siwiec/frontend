import validateOpinion from 'services/validations/validateOpinion.js';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.js';

const handleAddOpinionValidation = ({ opinion }) => {
  const isOpinionValid = validateOpinion({ opinion });

  return {
    opinionError: !isOpinionValid && VALIDATION_ERROR_MESSAGES.opinion,
    validationStatus: isOpinionValid
  };
};

export default handleAddOpinionValidation;
