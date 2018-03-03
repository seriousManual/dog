import React, { Component } from 'react';

class Field extends Component {
  render() {
    let {x, y, r} = this.props;
    
    return (
      <circle cx={x} cy={y} r={r} stroke="black" strokeWidth="3" fill="white" />
    );
  }
}

export default Field;
