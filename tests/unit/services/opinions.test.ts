import { handleAddOpinionValidation, generateOpinionContent } from 'services/opinions';
import OpinionPresentedContentGenerator from 'services/opinions/opinionPresentedContentGenerator';

describe('handleAddOpinionValidation', () => {
  it('returns false status if opinion is empty', () => {
    const response = handleAddOpinionValidation('');

    expect(response).toEqual({ opinionError: 'Opinia ma niepoprawny format!', validationStatus: false });
  });

  it('returns true status if opinion has appropriate format', () => {
    const response = handleAddOpinionValidation('Lorem ipsum');

    expect(response).toEqual({ opinionError: '', validationStatus: true });
  });
});

describe('generateOpinionContent', () => {
  const callSpy = jest.spyOn(OpinionPresentedContentGenerator.prototype, 'call').mockReturnValue({ narrowContent: 'opinion', restOfContent: '-content-response', textToLongToDisplay: false });

  it('returns OpinionPresentedContentGenerator result', async () => {
    const response = generateOpinionContent(4, 'Lorem ipsum', true);

    expect(callSpy).toHaveBeenCalledTimes(1);
    expect(response).toEqual({ narrowContent: 'opinion', restOfContent: '-content-response', textToLongToDisplay: false });
  });
});
