import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import GameResultView from './GameResultView'

import {
  Divcontainer,
  Divcontainers,
  Para,
  Designdiv,
  Headscore,
  Paracount,
  Ul,
  Li,
  Imgsrc,
  Buttonimg,
  Boxtrigger,
  Occupy,
  Div,
} from './styling'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const gameRuled = {
  isWin: 'YOU WON',
  isLoss: 'YOU LOSE',
  isDraw: 'IT IS DRAW',
}

class App extends Component {
  state = {shows: true,score: 0, userUrl: '', robotUrl: '', gameDescision: ''}

  startGame = event => {
    const randoms = Math.floor(Math.random() * choicesList.length)
    const getUrl = choicesList[randoms].imageUrl
    const getId = choicesList[randoms].id
    const usesUrl = event.target.src
    const getList = choicesList.filter(each => each.imageUrl === usesUrl)
    const objOfGame = getList[0]

    if (objOfGame.id === getId) {
      console.log('working mainif')
      this.setState(prevState => ({
        userUrl: usesUrl,
        robotUrl: getUrl,
        gameDescision: gameRuled.isDraw,
        score: prevState.score,
        shows: false,
      }))
    } else {
      const {gameDescision} = this.state

      if (
        (objOfGame.id === 'ROCK' && getId === 'SCISSORS') ||
        (objOfGame.id === 'SCISSORS' && getId === 'PAPER') ||
        (objOfGame.id === 'PAPER' && getId === 'ROCK')
      ) {
        console.log('working if')
        this.setState(prevState => ({
          userUrl: usesUrl,
          robotUrl: getUrl,
          gameDescision: gameRuled.isWin,
          score: prevState.score + 1,
          shows: false,
        }))
      } else {
        console.log('working else')
        console.log(getId)
        this.setState(prevState => ({
          userUrl: usesUrl,
          robotUrl: getUrl,
          gameDescision: gameRuled.isLoss,
          score: prevState.score - 1,
          shows: false,
        }))
      }
    }
  }

  getStart = () =>
    choicesList.map(each => (
      <Li key={each.id}>
        <Buttonimg
          type="button"
          data-testid={`${each.id.toLowerCase()}Button`}
          onClick={this.startGame}
        >
          <Imgsrc src={each.imageUrl} alt={each.id} />
        </Buttonimg>
      </Li>
    ))

  readyGame = () => this.setState({shows: true})

  render() {
    const {shows,userUrl, score, robotUrl, gameDescision} = this.state
    return (
      <Divcontainer>
        <Divcontainers>
          <Div>
            <Para>Rock Paper Scissors</Para>
          </Div>
          <Designdiv>
            <Headscore>Score</Headscore>
            <Paracount>{score}</Paracount>
          </Designdiv>
        </Divcontainers>
        <Ul>
          {shows ? (
            this.getStart()
          ) : (
            <GameResultView
              robotUrl={robotUrl}
              gameDescision={gameDescision}
              userUrl={userUrl}
              sendFile={this.readyGame}
            />
          )}
        </Ul>
        <Occupy>
          <Popup modal trigger={<button type="button">RULES</button>}>
            {close => (
              <Boxtrigger>
                <Buttonimg type="button" onClick={() => close()}>
                  <RiCloseLine label="ji" size={35} />
                </Buttonimg>
                <Imgsrc
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </Boxtrigger>
            )}
          </Popup>
        </Occupy>
      </Divcontainer>
    )
  }
}

export default App
