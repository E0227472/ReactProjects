import React, { Component } from 'react';
import './App.css';
import CreateChecklist from'../src/Admin/components/createchecklist';

class App extends Component {
  render() {
    return (
      <div className="App">
      <CreateChecklist/>
      </div>
    );
  }
}

export default App;
