import { isEmpty } from 'lodash';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors.js';
import OpinionPresentedContentGenerator from 'services/opinions/opinionPresentedContentGenerator.ts';

export const handleAddOpinionValidation = ({ opinion }) => {
  const isOpinionValid = !isEmpty(opinion);

  return {
    opinionError: !isOpinionValid && VALIDATION_ERROR_MESSAGES.opinion,
    validationStatus: isOpinionValid
  };
};

export const generateOpinionContent = ({
  displayedNumberOfChars,
  content,
  contentExpanded
}) => new OpinionPresentedContentGenerator({
  displayedNumberOfChars,
  content,
  contentExpanded
}).call();
