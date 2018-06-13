import React, { Component } from 'react';
import './App.css';
import Main from './Main'

import SignIn from './SignIn'

class App extends Component {
  state = {
    user: {
      uid: '123',
      userName: 'chris',
    }
  }

  render() {
    return (
      <div className="App">
          <Main user={this.state.user}/>

          <SignIn />
      </div>
    );
  }
}

export default App;
