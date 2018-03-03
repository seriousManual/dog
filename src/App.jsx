import React, { Component } from 'react';
import Board from './components/Board';
import GameStatistics from './components/GameStatistics';
import Space from './components/Space';
import Dice from './components/Dice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameStatistics />
        <Board>
          <Dice/>
        </Board>          

      </div>
    );
  }
}

export default App;
