import React, { Component } from 'react';
import {connect} from "react-redux";

class GameStatistics extends Component {
    render() {
      return (
        <div className="game-statistics">
          <div className="player">
              Current Player: <br/><span>{this.props.currentPlayerIndex}</span>
          </div>
          <div className="turn">
              Current turn: <br/><span>{this.props.currentTurn}</span>
          </div>
        </div>
      );
    }
  }
  
export default connect(state => state.gameState)(GameStatistics);
