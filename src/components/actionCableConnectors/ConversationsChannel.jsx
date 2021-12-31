import React from 'react';
import { ActionCable } from 'react-actioncable-provider';

//! It can be common for each channels

const ConversationsChannel = ({ handleReceivedConversation }) => (
  <ActionCable
    channel={{ channel: 'ConversationsChannel' }}
    onReceived={handleReceivedConversation}
  />
)

export default ConversationsChannel;

