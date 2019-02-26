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
      computerScore: 0,
      gameOver: false,
      playerChoice: '',
      computerChoice: ''
    }

    this.resetGame = this.resetGame.bind(this)
    this.computerSelection = this.computerSelection.bind(this)
    this.playerSelection = this.playerSelection.bind(this)
    this.playRound = this.playRound.bind(this)
    this.CheckScores = this.CheckScores.bind(this)
  }

  resetGame () {  
    window.location.reload()
  }

  computerSelection () {
    const randomArraySelector = Math.floor(Math.random() * Math.floor(3))
    const computerOptions = ['ROCK', 'PAPER', 'SCISSORS']
    const computerMove = computerOptions[randomArraySelector]
    
    return(computerMove)
  }

  playerSelection (event) {
    const playerMove = event.target.value
    
    return playerMove
  }

  CheckScores(playerScore, computerScore) {

    if (playerScore === 5 ) {
      this.setState({gameOver: true})
      document.getElementById('displayScores').innerHTML = `Congratulations you Win!! ${playerScore}, points to ${computerScore}, Click reset to play again`
      document.getElementById('pScore').setAttribute('style','background-color: #f4dc42;');
    } else if (computerScore === 5) {
      this.setState({gameOver: true})
      document.getElementById('displayScores').innerHTML = `Unlucky you Lose!! ${playerScore}, points to ${computerScore}, Click reset to try again`
      document.getElementById('cScore').setAttribute('style','background-color: #f4dc42;');
      
    } 
  }

  playRound(event) {
    
    const computerSelection = this.computerSelection()
    const playerSelection  = this.playerSelection(event)

    let {computerScore, playerScore, gameOver} = this.state

    this.CheckScores(playerScore, computerScore)
    
    if (gameOver === false) {
      if (playerSelection === computerSelection) {
        document.getElementById('displayScores').innerHTML = `You played ${playerSelection}, Computer played ${computerSelection}, This round is a draw`
        } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
          this.setState({computerScore: ++computerScore})
          document.getElementById('displayScores').innerHTML = `You played ${playerSelection}, Computer played ${computerSelection}, You Lose, Paper beats Rock!`
        } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
          this.setState({playerScore: ++playerScore})
          document.getElementById('displayScores').innerHTML = `You played ${playerSelection}, Computer played ${computerSelection}, You Win!, Rock beats Scissors`
        } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
          this.setState({playerScore: ++playerScore})
          document.getElementById('displayScores').innerHTML = `You played ${playerSelection}, Computer played ${computerSelection}, You Win, Paper beats Rock!`
        } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
          this.setState({computerScore: ++computerScore})
          document.getElementById('displayScores').innerHTML = `You played ${playerSelection}, Computer played ${computerSelection}, You Lose, Scissors beats Paper!`
        } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
          this.setState({playerScore: ++playerScore})
          document.getElementById('displayScores').innerHTML = `You played ${playerSelection}, Computer played ${computerSelection}, You Win, Scissors beats Paper!`
        } else {
          this.setState({computerScore: ++computerScore})
          document.getElementById('displayScores').innerHTML = `You played ${playerSelection}, Computer played ${computerSelection}, You Lose, Rock beats Scissors!`
        }
      }
    }

  render() {
    const {playerScore, computerScore} = this.state
   return (
    <>
      <h1 className='gameTitle'>Welcome to Rock, Paper, Scissors
        <GameButton className={'button reset'} label={'Reset Game'} onClick={this.resetGame} />
      </h1>

      <div className='button-container'>
        <h2>Player Choice</h2>
        <GameButton className={'button'} src={rock} label={'Rock'} value={'ROCK'} onClick={this.playRound} />
        <GameButton className={'button'} src={paper} label={'Paper'} value={'PAPER'} onClick={this.playRound} />
        <GameButton className={'button'} src={scissors} label={'Scissors'} value={'SCISSORS'} onClick={this.playRound} />
        
      </div>

      <div className='results'>
        <h1>Round Result</h1>
        <div className='displayScores' id ='displayScores'></div>
      </div>

      <div className='scoreTracker'>
        <h2>Score Board</h2>
        <ScoreContainer id={'pScore'} scoreLabel={playerScore} playerLabel={'Player Score'} />
        <ScoreContainer id={'cScore'} scoreLabel={computerScore} playerLabel={'Computer Score'} />
      </div>
    </>
    );
  }
}

export default App;
