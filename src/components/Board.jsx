import React, { Component } from 'react';
import Field from "./Field";

class Board extends Component {
  render() {

    const BOARD_SIZE = 550;
    var coordScalar = (BOARD_SIZE / 11);
    var spaceSize = coordScalar / 2.5;
    var borderWidth = 3;    
    
    const playableSpacesMap = [
      [4, 0], [5, 0], [6, 0, "green"],
      [6, 1], [6, 2], [6, 3], [6, 4],
      [7, 4], [8, 4], [9, 4],      
      [10, 4], [10, 5], [10, 6, "red"],
      [9, 6], [8, 6], [7, 6], [6, 6],
      [6, 7], [6, 8], [6, 9],
      [6, 10], [5, 10], [4, 10, "blue"], 
      [4, 9], [4, 8], [4, 7], [4, 6],
      [3, 6], [2, 6], [1, 6], 
      [0, 6], [0, 5], [0, 4, "yellow"],
      [1, 4], [2, 4], [3, 4], [4, 4],
      [4, 3], [4, 2], [4, 1],
    ]



    var playablespaceKey = 0;
    let playableSpaces = playableSpacesMap.map((coord) => {
      playablespaceKey++;
        var color = coord[2] ? coord[2] : "white"; 
        return <Field 
            x={coord[0] * coordScalar + spaceSize + borderWidth} 
            y={coord[1] * coordScalar + spaceSize + borderWidth} 
            r={spaceSize}
            color={color}
            borderWidth={borderWidth}
            key={playablespaceKey} 
        />
    })

    const startSpacesMap = [
        [0,0,"yellow"],[0,1,"yellow"],[1,0,"yellow"],[1,1,"yellow"],
        [9,0,"green"],[10,0,"green"],[9,1,"green"],[10,1,"green"],
        [0,9,"blue"],[0,10,"blue"],[1,9,"blue"],[1,10,"blue"],
        [9,9,"red"],[9,10,"red"],[10,9,"red"],[10,10,"red"],
      ]
      
      var startSpaceKey = 0;
      let startSpaces = startSpacesMap.map((coord) => {
          startSpaceKey++;
          var color = coord[2]; 
          return <Field 
              x={coord[0] * coordScalar + spaceSize + borderWidth} 
              y={coord[1] * coordScalar + spaceSize + borderWidth} 
              r={spaceSize}
              color={color}
              borderWidth={borderWidth}
              key={startSpaceKey} 
          />
      })
  

      const homeSpacesMap = [
        [5,1,"green"],[5,2,"green"],[5,3,"green"],[5,4,"green"],
        [9,5,"red"],[8,5,"red"],[7,5,"red"],[6,5,"red"],
        [5,9,"blue"],[5,8,"blue"],[5,7,"blue"],[5,6,"blue"],
        [1,5,"yellow"],[2,5,"yellow"],[3,5,"yellow"],[4,5,"yellow"],           
    ]

    var homeSpaceKey = 0;
    let homeSpaces = homeSpacesMap.map((coord) => {
        homeSpaceKey++;
        var color = coord[2]; 
        return <Field 
            x={coord[0] * coordScalar + spaceSize + borderWidth} 
            y={coord[1] * coordScalar + spaceSize + borderWidth} 
            r={spaceSize * 0.75}
            color={color}
            borderWidth={borderWidth}
            key={startSpaceKey} 
        />
    })

          

    return (
      <div className="board">
          <svg height={BOARD_SIZE} width={BOARD_SIZE}>
          {/* {this.props.children} */}
          {playableSpaces}
          {startSpaces}
          {homeSpaces}
          </svg>

      </div>
    );
  }
}

export default Board;
