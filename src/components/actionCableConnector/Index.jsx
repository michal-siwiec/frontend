import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { propTypes } from './types.js';

const ActionCableConnector = ({ channel, handleReceivedConversation }) => (
  <ActionCable
    channel={{ channel }}
    onReceived={handleReceivedConversation}
  />
);

ActionCableConnector.propTypes = propTypes;

export default ActionCableConnector;
