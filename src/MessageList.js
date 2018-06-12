import React from 'react'

import Message from  './Message'

const MessageList = (props) => {
    return (
        <div className="MessageList">
        {
            props.messages.map( msg => {
                return <Message key={msg.id} message={msg} />
            })
        }
        </div>
    )
}

export default MessageList