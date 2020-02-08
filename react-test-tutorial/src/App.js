import React, {useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(1);

  return (
    <React.Fragment>

    <h1 id = "counterDisplay">{counter}</h1>

    <button id = "increment" onClick = {() => {setCounter(prevState => prevState +1)}}>Increment Counter</button>

    <button id = "decrement" onClick = {() => {setCounter(prevState => prevState >= 1 ? prevState - 1 : prevState)}}>Decrement Counter</button>

    </React.Fragment>
  );
}

export default App;
