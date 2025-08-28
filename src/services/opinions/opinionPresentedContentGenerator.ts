import { cutAfterNChars, isTextLonger } from 'utils/helpers';

class OpinionPresentedContentGenerator {
  #displayedNumberOfChars;
  #content;
  #contentExpanded;

  constructor(displayedNumberOfChars: number, content: string, contentExpanded: boolean) {
    this.#displayedNumberOfChars = displayedNumberOfChars;
    this.#content = content;
    this.#contentExpanded = contentExpanded;
  }

  call() {
    const { narrowContent, restOfContent } = this.#cutString();

    return {
      narrowContent: this.#generatePresentedNarrowContent(narrowContent),
      restOfContent: this.#generatePresentedRestOfContent(restOfContent),
      textToLongToDisplay: this.#isTextToLongToDisplay()
    };
  }

  #cutString() {
    const { narrowContent, restOfContent } = cutAfterNChars(this.#content, this.#displayedNumberOfChars);

    return { narrowContent, restOfContent };
  }

  #generatePresentedNarrowContent(narrowContent: string) {
    const isTextTolong = this.#isTextToLongToDisplay();
    const shouldAddFutherTip = isTextTolong && !this.#contentExpanded;
    const shouldAddClosingQuotationMark = !this.#contentExpanded;

    return `"${narrowContent}${shouldAddFutherTip ? '...' : ''}${shouldAddClosingQuotationMark ? '"' : ''}`;
  }

  #generatePresentedRestOfContent(restOfContent: string) {
    return `${restOfContent}"`;
  }

  #isTextToLongToDisplay() {
    return isTextLonger(this.#content, this.#displayedNumberOfChars);
  }
}

export default OpinionPresentedContentGenerator;
