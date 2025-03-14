import { handleAddOpinionValidation, generateOpinionContent } from 'services/opinions.js';
import OpinionPresentedContentGenerator from 'services/opinions/opinionPresentedContentGenerator.js';

describe('handleAddOpinionValidation', () => {
  it('returns false status if opinion is empty', () => {
    const response = handleAddOpinionValidation({ opinion: '' });

    expect(response).toEqual({ opinionError: 'Opinia ma niepoprawny format!', validationStatus: false });
  });

  it('returns true status if opinion has appropriate format', () => {
    const response = handleAddOpinionValidation({ opinion: 'Lorem ipsum' });

    expect(response).toEqual({ opinionError: false, validationStatus: true });
  });
});

describe('generateOpinionContent', () => {
  const callSpy = jest.spyOn(OpinionPresentedContentGenerator.prototype, 'call').mockResolvedValue('opinion-content-response');

  it('returns OpinionPresentedContentGenerator result', async () => {
    const response = await generateOpinionContent({ displayedNumberOfChars: 4, content: 'Lorem ipsum', contentExpanded: true });

    expect(callSpy).toHaveBeenCalledTimes(1);
    expect(response).toEqual('opinion-content-response');
  });
});
