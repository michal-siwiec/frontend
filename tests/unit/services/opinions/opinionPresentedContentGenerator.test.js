import OpinionPresentedContentGenerator from 'services/opinions/opinionPresentedContentGenerator.ts';
import * as helpers from 'utils/helpers.ts';

describe('OpinionPresentedContentGenerator', () => {
  let cutAfterNCharsSpy;
  let isTextLongerSpy;

  beforeEach(() => {
    cutAfterNCharsSpy = jest.spyOn(helpers, 'cutAfterNChars');
    isTextLongerSpy = jest.spyOn(helpers, 'isTextLonger');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call cutAfterNChars with correct arguments and return the expected object', () => {
    const displayedNumberOfChars = 10;
    const content = 'Hello World!';
    const contentExpanded = false;

    cutAfterNCharsSpy.mockReturnValue({ narrowContent: 'Hello Worl', restOfContent: 'd!' });
    isTextLongerSpy.mockReturnValue(false);

    const result = new OpinionPresentedContentGenerator(displayedNumberOfChars, content, contentExpanded).call();

    expect(cutAfterNCharsSpy).toHaveBeenCalledTimes(1);
    expect(cutAfterNCharsSpy).toHaveBeenCalledWith(content, displayedNumberOfChars);
    expect(result).toEqual({ narrowContent: '"Hello Worl"', restOfContent: 'd!"', textToLongToDisplay: false });
  });

  it('should add "..." if text is longer and content is NOT expanded', () => {
    const displayedNumberOfChars = 5;
    const content = 'Jest is great!';
    const contentExpanded = false;

    cutAfterNCharsSpy.mockReturnValue({ narrowContent: 'Jest ', restOfContent: 'is great!' });
    isTextLongerSpy.mockReturnValue(true);

    const result = new OpinionPresentedContentGenerator(displayedNumberOfChars, content, contentExpanded).call();

    expect(isTextLongerSpy).toHaveBeenCalledWith(content, displayedNumberOfChars);
    expect(result).toEqual({ narrowContent: '"Jest ..."', restOfContent: 'is great!"', textToLongToDisplay: true });
  });

  it('should NOT add "..." if content is expanded even if text is too long', () => {
    const displayedNumberOfChars = 4;
    const content = 'Testing is important';
    const contentExpanded = true;

    cutAfterNCharsSpy.mockReturnValue({ narrowContent: 'Test', restOfContent: 'ing is important' });
    isTextLongerSpy.mockReturnValue(true);

    const result = new OpinionPresentedContentGenerator(displayedNumberOfChars, content, contentExpanded).call();

    expect(result).toEqual({ narrowContent: '"Test', restOfContent: 'ing is important"', textToLongToDisplay: true });
  });

  it('should return textToLongToDisplay as false if isTextLonger returns false', () => {
    const displayedNumberOfChars = 15;
    const content = 'Short text';
    const contentExpanded = false;

    cutAfterNCharsSpy.mockReturnValue({ narrowContent: 'Short text', restOfContent: '' });
    isTextLongerSpy.mockReturnValue(false);

    const result = new OpinionPresentedContentGenerator(displayedNumberOfChars, content, contentExpanded).call();

    expect(result.textToLongToDisplay).toBe(false);
  });
});
