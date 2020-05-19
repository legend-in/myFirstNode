import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path="/">
            <div>Home
            </div>
          </Route>
        </Router>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Toggle />
      </header>
      <body>
        
      </body>
    </div>
  );
}

class Toggle extends React.Component {
  state = {
    isToggleOn: true,
    counter: 0
  };

  handleClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  };

  plusOneClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  minusOneClick = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <div>
          <button onClick={this.plusOneClick}>+</button>
          <input value={this.state.counter} />
          <button onClick={this.minusOneClick}>-</button>
        </div>
      </div>
    );
  }
}

export default App;
