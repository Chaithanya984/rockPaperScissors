import {Lisplay, Parass, Imgrobo, Boxgame, Subbox, Buttondes} from '../styling'

const GameResultView = props => {
  const {userUrl, robotUrl, gameDescision, sendFile} = props
  const callReset = () => {
    sendFile()
  }
  return (
    <Lisplay className="lis-play">
      <Boxgame className="box-game">
        <Subbox className="sub-box">
          <Parass className="parass">YOU</Parass>
          <Imgrobo src={userUrl} alt="your choice" />
        </Subbox>
        <Subbox className="sub-box">
          <Parass className="parass">OPPONENET</Parass>
          <Imgrobo src={robotUrl} alt="opponent choice" />
        </Subbox>
      </Boxgame>
      <Subbox>
        <Parass className="parass">{gameDescision}</Parass>
        <Buttondes onClick={callReset} type="button">
          PLAY AGAIN
        </Buttondes>
      </Subbox>
    </Lisplay>
  )
}

export default GameResultView
