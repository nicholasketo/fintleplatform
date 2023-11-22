// src/App.js

import React from 'react';
import './App.css';

function handleClick() {
  console.log('Button clicked!');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fintle: A Financial Literacy Interactive Game for Children!</h1>
      </header>
      <main>
        <p>Game made by Nicholas Eto
        </p>
        <button onClick = {handleClick}>Play Now</button>
      </main>
    </div>
  );
}

export default App;