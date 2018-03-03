import React, { Component } from 'react';

class Field extends Component {
  render() {
    let {x, y, r, color, isHighlighted} = this.props;

    return (
      <circle cx={x} cy={y} r={r}
        className={isHighlighted ? "highlight" : ""}
        stroke="black" strokeWidth="3" fill={color} />
    );
  }
}

export default Field;
