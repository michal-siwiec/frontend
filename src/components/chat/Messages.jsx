/* eslint react/destructuring-assignment: 0 */

import React, { Component } from 'react';
import { API_ROOT } from '../../constants/environment';
import ActionCableConnector from '../actionCableConnector/Connector.jsx';
import invokeHttpRequest from '../../services/HttpRequestInvoker';

class Messages extends Component {
  static addConversation = () => {
    invokeHttpRequest({
      url: `${API_ROOT}/conversations`,
      method: 'POST',
      data: { conversation: { title: 'DUPA 13' } }
    });
  };

  constructor(props) {
    super(props);
    this.actionCable = (
      <ActionCableConnector
        handleReceivedConversation={this.handleReceivedConversation}
        channel="ConversationsChannel"
      />
    );
    this.state = { messages: [] };
  }

  componentDidMount() {
    invokeHttpRequest({ url: `${API_ROOT}/conversations` })
      .then(data => this.setState({ messages: data }));
  }

  handleReceivedConversation = data => {
    const newMessages = JSON.parse(data);
    this.setState(({ prevMessages }) => ({ messages: prevMessages.push(newMessages) }));
  };

  render() {
    return (
      <div>
        <h1>Messages</h1>
        {this.actionCable}
        <button
          onClick={Messages.addConversation}
          type="button"
        >
          ADD CONVERSATION
        </button>
        <ul>
          {
            this.state.messages.map(({ title }) => (
              <li key={`key-${title}`}>
                {title}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Messages;
