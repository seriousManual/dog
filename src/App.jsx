import React, { Component } from 'react';
import Board from './components/Board';
import Space from './components/Space';
import Dice from './components/Dice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board>
          <Dice/>
        </Board>          

      </div>
    );
  }
}

export default App;
