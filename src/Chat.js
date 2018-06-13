import React from 'react';

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends React.Component {
    constructor() {
        super()

        this.state = {
            messages: [
                {
                    id: 1,
                    userName: 'stephen',
                    body: 'cool',
                },
        
                {
                    id: 2,
                    userName: 'dplazo',
                    body: 'this guy so annoying. I hate my job',
                }
            ]
        }
    }

    addMessage = (message) => {
        const messages = [... this.state.messages]
        messages.push({
            id: Date.now(),
            username: this.props.user.userName,
            body: message,
        })

        this.setState({messages: messages})
    }

    render() {
        return (
            <div className="Chat" style={style}>
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm addMessage={this.addMessage}/>
            </div>
        );
    }
}

const style = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
}

export default Chat