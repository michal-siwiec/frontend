export const getFirstNCharacters = ({ string, charsQuantity }) => string.slice(0, charsQuantity);
export const shouldDisplayTextExpander = ({ string, charsQuantity }) => string.length > charsQuantity;
