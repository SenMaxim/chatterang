import React from 'react'

const MessageForm = (props) => {
    const handleSubmit = (ev) => {
        ev.preventDefault()
        props.addMessage()
    }

    return (
        <form 
        className="MessageForm"
        onSubmit={handleSubmit}
        >
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