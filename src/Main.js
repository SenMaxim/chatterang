import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

import base from './base'

class Main extends Component {
  constructor() {
    super()

    this.state = {
      room: {},
      rooms: {}
    }
  }


  componentDidMount() {
    this.loadRoom({
      name: this.props.match.params.roomName,
    })

    // Sync rooms (roomList)
    base.syncState(
      'rooms',
      {
        context: this,
        state: 'rooms',
      }
    )

  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.roomName !== this.props.match.params.roomName) {
      this.loadRoom({
        name: this.props.match.params.roomName,
      })
    }
  }

  loadRoom = (roomName) => {
    this.setState({ room: roomName })
  }

  render() {

    //console.log('this.state.room is ' + this.state.room.name)
    if (this.state.rooms[this.state.room.name]) {
      console.log(this.state.rooms[this.state.room.name].description)
      return (
        <div className="Main" style={styles}>
          <Sidebar
            user={this.props.user}
            signOut={this.props.signOut}
            rooms={this.state.rooms}
          />
          <Chat
            user={this.props.user}
            room={this.state.room}
            roomDescription={this.state.rooms[this.state.room.name].description}
          />
        </div>
      )
    }
    else {
      return (
        <div className="Main" style={styles}>
          <Sidebar
            user={this.props.user}
            signOut={this.props.signOut}
            rooms={this.state.rooms}
          />
          <Chat
            user={this.props.user}
            room={this.state.room}
            roomDescription="room description here"
          />
        </div>
      )
    }
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main