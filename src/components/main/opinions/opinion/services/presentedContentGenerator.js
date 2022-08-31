import { cutAfterNChars, isTextLonger } from '../../../../../utils/helpers.js';

class PresentedContentGenerator {
  #displayedNumberOfChars;
  #content;
  #contentExpanded;

  constructor({ displayedNumberOfChars, content, contentExpanded }) {
    this.#displayedNumberOfChars = displayedNumberOfChars;
    this.#content = content;
    this.#contentExpanded = contentExpanded;
  }

  call() {
    return this.#response();
  }

  #response() {
    const { narrowContent, restOfContent } = this.#cutString();

    return {
      narrowContent: this.#generatePresentedNarrowContent(narrowContent),
      restOfContent: this.#generatePresentedRestOfContent(restOfContent),
      textToLongToDisplay: this.#isTextToLongToDisplay()
    };
  }

  #cutString() {
    const {
      narrowContent,
      restOfContent
    } = cutAfterNChars({ string: this.#content, charsQuantity: this.#displayedNumberOfChars });

    return { narrowContent, restOfContent };
  }

  #generatePresentedNarrowContent(narrowContent) {
    const isTextTolong = this.#isTextToLongToDisplay();
    const shouldAddFutherTip = isTextTolong && !this.#contentExpanded;
    const shouldAddClosingQuotationMark = !this.#contentExpanded;

    return `"${narrowContent}${shouldAddFutherTip ? '...' : ''}${shouldAddClosingQuotationMark ? '"' : ''}`;
  }

  #generatePresentedRestOfContent(restOfContent) {
    return `${restOfContent}"`;
  }

  #isTextToLongToDisplay() {
    return isTextLonger({ string: this.#content, charsQuantity: this.#displayedNumberOfChars });
  }
}

export default PresentedContentGenerator;
