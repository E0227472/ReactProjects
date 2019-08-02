import React, { Component } from "react";
import "./App.css";
import Movies from "../src/components/Movies";
import NavBar from "../src/common/navbar";
import Routing from "./common/Routing";

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <br />
        <br />
        <Routing />
      </main>
    );
  }
}

export default App;
