import React, { Component } from 'react';
import Piece from "./Piece";
import FieldsGenerators from "./FieldsGenerators";
import { BOARD_SIZE, PLAYER_COLORS, START_SPACES_MAP } from "../constants";

class Board extends Component {
  render() {
    let playableSpaces = FieldsGenerators.getPlayableSpaces();
    let startSpaces = FieldsGenerators.getStartSpaces();
    let homeSpaces = FieldsGenerators.getHomeSpaces();
              
    let startPieceColorIndex = 0;

    let pieces = START_SPACES_MAP.map((data, i) => {
      if (i % 4 == 0 && i !== 0) {
        startPieceColorIndex++
      }
      return <Piece 
          boardSize={BOARD_SIZE}
          x={data[0]} 
          y={data[1]} 
          color={PLAYER_COLORS[startPieceColorIndex]}
          key={"piece-" + i} 
      />
    });

    return (
      <div className="board">
          <svg height={BOARD_SIZE} width={BOARD_SIZE}>
            {playableSpaces}
            {startSpaces}
            {homeSpaces}
            {pieces}
          </svg>

      </div>
    );
  }
}

export default Board;
