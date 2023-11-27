import './index.css'

const Header = props => {
  const {score, timer} = props

  return (
    <div className="bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
        className="img"
        alt="website logo"
      />

      <div className="bg1">
        <p className="p">
          Score: <span className="p1">{score}</span>
        </p>

        <div className="bg2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />

          <p className="p1">
            <span className="p1">{timer}</span> sec
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
