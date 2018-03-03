import React, { Component } from 'react';
import {connect} from "react-redux";

class Dice extends Component {
    render() {
      return (
        <div className="dice">
            <h2>{this.props.value}</h2>
        </div>
      );
    }
  }
  
export default connect(state => state.dice)(Dice);