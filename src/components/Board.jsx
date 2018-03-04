import React, { Component } from 'react';
import Field from "./Field";
import { PLAYABLE_SPACES_MAP, START_SPACES_MAP, HOME_SPACES_MAP, 
  PLAYER_COLORS, COLORS, DIRECTIONS, ARROWS } from "../constants";

class Board extends Component {
  render() {
    const BOARD_SIZE = 550;

    let playablespaceColorIndex = 0;
    let playableSpaces = PLAYABLE_SPACES_MAP.map((data, i) => {
        let isZeroOrModTen = i === 0 || i % 10 === 0
        let color = isZeroOrModTen ? PLAYER_COLORS[playablespaceColorIndex] : COLORS.WHITE;
        let text = null;
        if (isZeroOrModTen) {
          text = ARROWS[playablespaceColorIndex];
          playablespaceColorIndex++;
        }
          
        let direction = data[2] ? data[2] : null
        return <Field
            boardSize={BOARD_SIZE}
            x={data[0]} 
            y={data[1]} 
            color={color}
            text={text}
            direction={direction}
            key={"playablespace-" + i} 
        />
    })

      
      let startSpaceDirectionIndex = 3;
      let startSpaceColorIndex = 0;
      let startSpaces = START_SPACES_MAP.map((coord, i) => {
        startSpaceDirectionIndex = (startSpaceDirectionIndex + 1) % 4;
        if (startSpaceDirectionIndex == 0 && i !== 0) {
          startSpaceColorIndex = (startSpaceColorIndex + 1) % 4
        }
          var color = coord[2]; 
          return <Field 
              direction={DIRECTIONS[startSpaceDirectionIndex]}
              boardSize={BOARD_SIZE}
              x={coord[0]} 
              y={coord[1]} 
              color={PLAYER_COLORS[startSpaceColorIndex]}
              key={"startspace-" + i} 
          />
        })
  


    var homeSpaceColorIndex = 0;
    var homeSpaceDirectionIndex = 0;
    let homeSpaces = HOME_SPACES_MAP.map((coord, i) => {
      if(i !== 0 && i % 4 === 0) {
        homeSpaceColorIndex++;
        homeSpaceDirectionIndex++
      }
      return <Field 
          direction={DIRECTIONS[homeSpaceDirectionIndex]}
          boardSize={BOARD_SIZE}
          x={coord[0]} 
          y={coord[1]}
          color={PLAYER_COLORS[homeSpaceColorIndex]}
          key={"homespace-" + i} 
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
