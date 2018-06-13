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


  updateUser = (newUser) => {
    this.setState({user: newUser})
  }



  render() {
    return (
      <div className="App">
          <Main user={this.state.user}/>

          <SignIn updateUser={this.updateUser}/>
      </div>
    );
  }
}

export default App;
