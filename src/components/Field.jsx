import React, { Component } from 'react';

class Field extends Component {
  render() {
    let {x, y, color, isHighlighted, direction, boardSize, text} = this.props;

    // 11 spaces on board
    var fullSpace = (boardSize / 11);
    var spaceSize = fullSpace / 2.5;
    var borderWidth = 3;        


    let cx = x * fullSpace + spaceSize + borderWidth
    let cy = y * fullSpace + spaceSize + borderWidth

    let line = getLine(direction, cx, cy, spaceSize, fullSpace);
    let textComponent = getText(text)
    return (
      <g>
        <circle 
          cx={cx} 
          cy={cy} 
          r={spaceSize}
          className={isHighlighted ? "highlight" : ""}
          stroke="black" strokeWidth="3" fill={color} >
        </circle>
        {line}
        {textComponent}
      </g>
    );

    function getText(text) {
      if (!text) {
        return null;
      }
      return <text x={cx} y={cy} textAnchor="middle" dy=".3em"
      dangerouslySetInnerHTML={{__html: `${text}`}}></text>
      
    }
    function getLine(direction, x, y, spaceSize, fullSpace) {
      // get the remainder between a full space and the size or a piece
      let r1 = spaceSize;
      let r2 = fullSpace - spaceSize
             
      let linePosition;
      switch (direction) {
        case ("N"): 
          linePosition = makeLinePosition(x, y - r1, x, y - r2)
          break;
        case ("S"): 
          linePosition = makeLinePosition(x, y + r1, x, y + r2)
          break;
        case ("E"): 
          linePosition = makeLinePosition(x + r1, y, x + r2, y)
          break;
        case ("W"): 
          linePosition = makeLinePosition(x - r1, y, x - r2, y)
          break;
        default:
          linePosition = makeLinePosition(x, y + r1, x, y + r2)    
      }

      let line = direction 
      ? <line x1={linePosition.startX} y1={linePosition.startY} x2={linePosition.endX} y2={linePosition.endY} stroke="black" strokeWidth="3" />
      : null;
  
      return line        
    }

    function makeLinePosition(sx, sy, ex, ey) {
      return {
        startX: sx,
        startY: sy, 
        endX: ex, 
        endY: ey          
      }      
    }
  }
}


export default Field;
