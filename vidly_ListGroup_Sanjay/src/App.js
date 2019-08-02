import React, { Component } from "react";
import "./App.css";
import Movies from "../src/components/Movies";


class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies/>
      </main>
    );
  }
}

export default App;
