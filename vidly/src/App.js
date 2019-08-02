import React, { Component } from "react";
import "./App.css";
import Movies from "../src/components/Movies";
import NavBar from "../src/common/navbar";
import Routing from "./common/Routing";

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar />
      <main className="container">
        <br />
        <br />
        <Routing />
      </main>
     </React.Fragment>
    );
  }
}

export default App;
