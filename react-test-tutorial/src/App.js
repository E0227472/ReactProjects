import React from 'react';
import GuessWords from './guessWords';
import Congrats from './congrats';
import './App.css';

function App() {


  return (
    <React.Fragment>
      <GuessWords guessWords = {[{guessWord: 'Train', letterMatchCount: 3}]}></GuessWords>
      <Congrats success = {false}></Congrats>
    </React.Fragment>
  );
}

export default App;
