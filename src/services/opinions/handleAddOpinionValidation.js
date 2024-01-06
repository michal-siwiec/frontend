import validateOpinion from 'services/validations/validateOpinion.js';
import validationErrors from 'data/validationErrors.js';

const handleAddOpinionValidation = ({ opinion }) => {
  const isOpinionValid = validateOpinion({ opinion });

  return {
    opinionError: !isOpinionValid && validationErrors.opinion,
    validationStatus: isOpinionValid
  };
};

export default handleAddOpinionValidation;
