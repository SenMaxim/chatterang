import React from 'react'

const Message = (props) => {


    return <div style={styles.message}>
                <div style={styles.message.details}>
                {props.message.userName}: {props.message.body} 
                </div>
            </div>
}

const styles = {
    message: {
        display: 'flex',
        marginTop: '1rem',
        padding: '0 1rem',

        details: {
            flex: '1',
            paddingLeft: '0.5rem',
        }
    }
}

export default Message