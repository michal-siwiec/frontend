import { func, string } from 'prop-types';

export const propTypes = {
  handleReceivedConversation: func.isRequired,
  channel: string.isRequired
};
