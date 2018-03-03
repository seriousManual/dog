import React, { Component } from 'react';
import Field from "./Field";

class Board extends Component {
  render() {

    const BOARD_SIZE = 550;

    const spacesMap = [
      [4, 0], [5, 0], [6, 0],
      [6, 1], [6, 2], [6, 3], [6, 4],
      [7, 4], [8, 4], [9, 4],      
      [10, 4], [10, 5], [10, 6],
      [9, 6], [8, 6], [7, 6], [6, 6],
      [6, 7], [6, 8], [6, 9],
      [6, 10], [5, 10], [4, 10], 
      [4, 9], [4, 8], [4, 7], [4, 6],
      [3, 6], [2, 6], [1, 6], 
      [0, 6], [0, 5], [0, 4],
      [1, 4], [2, 4], [3, 4], [4, 4],
      [4, 3], [4, 2], [4, 1],
    ]

    var spaceKey = 0;
    var coordScalar = (BOARD_SIZE / 11);
    var spaceSize = coordScalar / 2.5;
    var borderWidth = 3;    
    let spaces = spacesMap.map((coord) => {
        spaceKey++;
        return <Field 
            x={coord[0] * coordScalar + spaceSize + borderWidth} 
            y={coord[1] * coordScalar + spaceSize + borderWidth} 
            r={spaceSize}
            borderWidth={borderWidth}
            key={spaceKey} 
        />
    })
      
    console.log(spaces.length)
    return (
      <div className="board">
          <svg height={BOARD_SIZE} width={BOARD_SIZE}>
          {/* {this.props.children} */}
          {spaces}
          </svg>

      </div>
    );
  }
}

export default Board;
