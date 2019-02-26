import React, { Component } from 'react';

//Components
import GameButton from '../src/components/game-button'
import ScoreContainer from '../src/components/score-container'

//images
import rock from '../src/static/images/rock.png'
import paper from '../src/static/images/paper.png'
import scissors from '../src/static/images/scissors.png'

import './App.scss';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerScore: 0,
      computerScore: 0
    }

    this.resetGame = this.resetGame.bind(this)
    this.computerSelection = this.computerSelection.bind(this)
    this.playerSelection = this.playerSelection.bind(this)
  }

  resetGame () {
    window.location.reload()
  }

  computerSelection () {
    const randomArraySelector = Math.floor(Math.random() * Math.floor(3))
    const computerChoice = ['ROCK', 'PAPER', 'SCISSORS']

    return(computerChoice[randomArraySelector])
  }

  playerSelection (event) {
    const playerChoice = event.target.value

    return playerChoice
  }


  render() {
   return (
    <>
      <h1 className='gameTitle'>Welcome to Rock, Paper, Scissors
        <GameButton className={'button reset'} label={'Reset Game'} onClick={this.resetGame} />
      </h1>

      <div className='button-container'>
        <h2>Player Choice</h2>
        <GameButton className={'button'} src={rock} label={'Rock'} value={'ROCK'} onClick={this.playerSelection} />
        <GameButton className={'button'} src={paper} label={'Paper'} value={'PAPER'} onClick={this.playerSelection} />
        <GameButton className={'button'} src={scissors} label={'Scissors'} value={'SCISSORS'} onClick={this.playerSelection} />
        
      </div>

      <div className='results'>
        <h1>Round Result</h1>
        <div className='displayScores' id ='displayScores'></div>
      </div>

      <div className='scoreTracker'>
        <h2>Score Board</h2>
        <ScoreContainer id={'pScore'} scoreLabel={this.state.playerScore} playerLabel={'Player Score'} />
        <ScoreContainer id={'cScore'} scoreLabel={this.state.computerScore} playerLabel={'Computer Score'} />
      </div>
    </>
    );
  }
}

export default App;
