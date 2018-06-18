import React from 'react'

class ChatHeader extends React.Component {

  render() {
    if (this.props.roomDescription) {
      return (
        <div className="ChatHeader" style={styles.header}>
          <div className="roomInfo">
            <h2 style={styles.h2}>
              #{this.props.room.name}
            </h2>
            <p style={styles.p}>
              {this.props.roomDescription}
            </p>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="ChatHeader" style={styles.header}>
          <div className="roomInfo">
            <h2 style={styles.h2}>
              #{this.props.room.name}
            </h2>
            <p style={styles.p}>
              Room Description
            </p>
          </div>
        </div>
      )
    }
  }
}

const styles = {
  header: {
    backgroundColor: '#f3f3f3',
    borderBottom: '1px solid #ccc',
    height: '3rem',
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center',
  },

  h2: {
    fontSize: '1.1rem',
    margin: 0,
  },

  p: {
    color: '#999',
    margin: 0,
    fontSize: '0.8rem',
  },
}

export default ChatHeader