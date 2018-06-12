import React from 'react'

const MessageForm = () => {
    return (
        <form className="MessageForm">
            <input 
            type="text" 
            name="body" 
            placeHolder="Type a message..."
            />

            <button type="Submit">Send</button>
        </form>
    )
}

export default MessageForm