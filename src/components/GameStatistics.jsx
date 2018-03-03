import React, { Component } from 'react';
import {connect} from "react-redux";

class GameStatistics extends Component {
    render() {
      return (
        <div className="game-statistics">
          Current Player {this.props.currentPlayerIndex}
          Current turn {this.props.currentTurn}
        </div>
      );
    }
  }
  
export default connect(state => state.gameState)(GameStatistics);
