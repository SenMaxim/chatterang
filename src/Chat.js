import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import base from './base'

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      messages: [],
      rebaseBinding: null,
    }
  }

  componentDidMount() {
    this.syncMessages()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.room.name !== this.props.room.name) {
      this.syncMessages()
    }
  }

  syncMessages = () => {
    // Stop syncing with the current endpoint
    if (this.state.rebaseBinding) {
      base.removeBinding(this.state.rebaseBinding)
    }

    // sync with the new endpoint
    const rebaseBinding = base.syncState(`${this.props.room.name}/messages`, {
      context: this,
      state: 'messages',
      asArray: true,
    })

    this.setState({ rebaseBinding })
  }

  addMessage = (body) => {
    const messages = [...this.state.messages]
    messages.push({
      id: Date.now(),
      user: this.props.user,
      body,
    })

    this.setState({ messages })
  }

  render() {
    console.log('the roomDescription is ' + this.props.roomDescription)

    return (
      <div className="Chat" style={styles}>
        <ChatHeader 
          room={this.props.room} 
          roomDescription={this.props.roomDescription}
          />
        <MessageList
          messages={this.state.messages}
          room={this.props.room}
        />
        <MessageForm addMessage={this.addMessage} />
      </div>
    )
  }
}

const styles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}

export default Chat