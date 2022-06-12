import { exact, func, string } from 'prop-types';

export const propTypes = exact({
  handleReceivedConversation: func.isRequired,
  channel: string.isRequired
}).isRequired;
