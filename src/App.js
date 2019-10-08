import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
    message: ""
  };
  render() {
    return <div className="App">FS TODO APP</div>;
  }
}
export default App;
