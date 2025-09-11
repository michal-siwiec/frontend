import { isEmpty } from 'lodash';
import { VALIDATION_ERROR_MESSAGES } from 'data/errors';
import OpinionPresentedContentGenerator from 'services/opinions/opinionPresentedContentGenerator';

export const handleAddOpinionValidation = (opinion: string) => {
  const isOpinionValid = !isEmpty(opinion);

  return {
    opinionError: !isOpinionValid ? VALIDATION_ERROR_MESSAGES.opinion : '',
    validationStatus: isOpinionValid
  };
};

export const generateOpinionContent = (displayedNumberOfChars: number, content: string, contentExpanded: boolean) => (
  new OpinionPresentedContentGenerator(displayedNumberOfChars, content, contentExpanded).call()
);
