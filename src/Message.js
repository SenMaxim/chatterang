import React from 'react'

const Message = (props) => {


    return <div>{props.message.userName}: {props.message.body} </div>
}

export default Message