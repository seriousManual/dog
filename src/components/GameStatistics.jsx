import React, { Component } from 'react';
import {connect} from "react-redux";

class GameStatistics extends Component {
    render() {
      console.log(this.props);
      let {currentTurn, currentPlayerIndex} = this.props;
      return (
        <div className="game-statistics">
          <div className="player">
              Current Player: <br/><span>{this.props[currentPlayerIndex].name}</span>
          </div>
          <div className="turn">
              Current turn: <br/><span>{currentTurn}</span>
          </div>
        </div>
      );
    }
  }
  
export default connect(state => Object.assign({}, state.gameState, state.players))(GameStatistics);
