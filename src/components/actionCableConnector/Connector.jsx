import React from 'react';
import { ActionCable } from 'react-actioncable-provider';

const ActionCableConnector = ({ channel, handleReceivedConversation }) => (
  <ActionCable
    channel={{ channel: channel }}
    onReceived={handleReceivedConversation}
  />
)

export default ActionCableConnector;
