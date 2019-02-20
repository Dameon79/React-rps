import React, { Component } from 'react'

class GameButton extends Component {
  render() {
    const { className, src, label, onClick, value } = this.props
    
    return (
      <button className={className} onClick={onClick} value={value} type='button'> <img src={src} alt=''></img> {label}</button>
    )
  }
}

export default GameButton