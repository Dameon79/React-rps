import React, { Component } from 'react'

class ScoreContainer extends Component {
  render() {
    const { id, playerLabel, scoreLabel } = this.props
    
    return (
      <div className='scoreContainer'>
        <h2>{playerLabel}</h2>
        <div className='scoreCounter' id={id}>{scoreLabel}</div>
      </div>
    )
  }
}

export default ScoreContainer
