import React, { Component } from 'react';

class Space extends Component {
  render() {
    return (
      <div className="space">
        <svg height="100" width="100">
          <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="white" />
        </svg> 
      </div>
    );
  }
}

export default Space;
