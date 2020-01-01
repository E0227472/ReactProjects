import React from 'react';
import TextField from './textField';

const someFunction = (bob: string) => {
 console.log(`hey ${bob}`);
}

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField 
      text = 'Hello World'
      obj = {{firstName: 'sanjay', lastName: 'kumar'}}
      i = {22}
      fn = {() => someFunction('bob')}
      />
    </div>
  );
}

export default App;
