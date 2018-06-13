import React, { Component } from 'react';
import './App.css';
import Main from './Main'

import SignIn from './SignIn'

class App extends Component {
  state = {
    user: {
      uid: '123',
      userName: 'chris',
      set: true
    }
  }


  updateUser = (newUser) => {
    this.setState({user: newUser, set: true})
  }



  render() {
    if (this.state.set) {
      return (
        <div className="App">
            <Main user={this.state.user}/>
        </div>
      );
    }

    return (
      <div className="App">
          <SignIn updateUser={this.updateUser}/>
      </div>
    );
  }
}

export default App;
