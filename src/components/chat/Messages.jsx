import React, { Component } from 'react';
import { API_ROOT } from '../../constants/API';
import ConversationsChannel from '../actionCableConnectors/ConversationsChannel.jsx';
import invokeHttpRequest from '../../services/HttpRequestInvoker.js';

class Messages extends Component {
  constructor(props) {
    super(props)
    this.actionCable = <ConversationsChannel handleReceivedConversation={this.handleReceivedConversation} />
    this.state = { messages: [] }
  }

  componentDidMount() { 
    invokeHttpRequest({ url: `${API_ROOT}/conversations` })
    .then(data => this.setState({ messages: data }))
  }

  handleReceivedConversation = data => {
    const messages_cpy = this.state.messages
    messages_cpy.push(JSON.parse(data))

    this.setState({ messages: messages_cpy })
  }

  addConversation = () => {
    invokeHttpRequest({
      url: `${API_ROOT}/conversations`,
      method: 'POST',
      data: { conversation: { title: 'DUPA 13' } }
    })
  }

  render() {
    return (
      <div>
        <h1>Messages</h1>
        {this.actionCable}
        <button onClick={this.addConversation}>ADD CONVERSATION</button>
        <ul>
          {this.state.messages.map((msg, index) => <li key={`key-${index}`}>{msg.title}</li>)}
        </ul>
      </div>
    )
  }
}

export default Messages;
