import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>5 elements of AI</h1>
        <a className="App-link" href="https://drive.google.com/open?id=1WNVUKFgQ9lrPu7BOSe5O88k_x8drqjQH" target="_blank" rel="noopener noreferrer">OnePager (en)</a>
        <a className="App-link" href="https://drive.google.com/open?id=18hQ52fBsq1rh7fHNX0x4FcC-gEQFWsRk" target="_blank" rel="noopener noreferrer">Presentation (de)</a>
        <a className="App-link" href="mailto:tobias.oberrauch@pioneers.ai" target="_blank" rel="noopener noreferrer">Mail me</a>
      </header>
    </div>
  );
}

export default App;
