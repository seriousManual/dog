import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { ACTION_UPDATE_DI, reducer } from '../state/dice'

class Dice extends Component {
    render() {
      return (
        <div className="dice">
            <button onClick={() => this.onDiceClick()}>Roll Dice</button>
            <h2>{this.props.value}</h2>
        </div>
      );
    }
    onDiceClick() {
      console.log("dice rolle should be here....")
    }
  }
  
export default connect(state => state.dice)(Dice);