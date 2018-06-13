import React from 'react';

import Sidebar from './Sidebar'
import Chat from './Chat'
import ChatHeader from './ChatHeader'

class Main extends React.Component {
    render() {
        return (
            <div className="Main" style={styles}>
                <Sidebar user={this.props.user}/>
                <Chat user={this.props.user}/>
            </div>
        );
    }
}

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
}

export default Main