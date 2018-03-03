import React, { Component } from 'react';
import Board from './components/Board';
import Space from './components/Space';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board>
          <Space />
          <Space />
          <Space />

        </Board>          

      </div>
    );
  }
}

export default App;
