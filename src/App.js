import React from 'react';
import Board from './Board';
import './App.css';
import Cell from './Cell';

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <Board className="Board" />
    </div>
  );
}

export default App;
