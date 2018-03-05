import React, { Component } from 'react';

class Piece extends Component {
  render() {
    let {x, y, color, isHighlighted, boardSize} = this.props;

    // 11 spaces on board
    var fullSpace = (boardSize / 11);
    var pieceSize = fullSpace / 3.5;
    var borderWidth = 3;        

    var offset = (pieceSize + borderWidth) / 2;

    let posX = x * fullSpace + pieceSize + offset
    let posY = y * fullSpace + pieceSize + offset

    return (
      <g className="piece">
        <circle 
          cx={posX} 
          cy={posY} 
          r={pieceSize}
          className={isHighlighted ? "highlight" : ""}
          stroke="black" strokeWidth="2" fill={color} >
        </circle>
      </g>
    );

  }
}


export default Piece;
