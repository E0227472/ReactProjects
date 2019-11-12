import React from 'react';
import './App.css';
import Cards from 'react-credit-cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-credit-cards/lib/styles.scss';

function App() {
  return (
    <div>
      <Cards
          cvc=""
          expiry= ""
          focus= ""
          name= ""
          number= ""
        />
    </div>
  );
}

export default App;
