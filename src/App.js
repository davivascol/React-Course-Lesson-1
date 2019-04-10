import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  constructor (props) {
    super (props);
    this.state = { username : 'Ruan Antonio' };
  }

  setUserNameHandler = (name) => {
    this.setState({username: name.target.value});
  }

  render() {
    return (
      <div className="App">
        <UserInput change={this.setUserNameHandler} username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
