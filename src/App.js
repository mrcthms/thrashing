import React, { Component } from "react";
import Thrasher from "./Thrasher";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    toggled: false
  };

  handleClick = () => {
    this.setState(() => ({
      toggled: !this.state.toggled
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.handleClick}>Click me to set a toggled prop and pass it down to thrasher</button>
        </header>
        <Thrasher toggled={this.state.toggled} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
