import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Top from "./components/top";
class App extends Component {
  render() {
    return (
    <div className="App">
      <img className="App-logo" alt="logo" src={logo} />
      <Top />
    </div>
    )
  }
}

export default App;
