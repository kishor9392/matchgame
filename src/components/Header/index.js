import './index.css'

const Header = props => {
  const {score, timer} = props

  return (
    <ul className="bg">
      <li className="li">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
          className="img"
          alt="website logo"
        />
      </li>

      <li className="bg1 li">
        <p className="p">
          Score: <span className="p1">{score}</span>
        </p>

        <div className="bg2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />

          <p className="p1">{timer} Sec</p>
        </div>
      </li>
    </ul>
  )
}

export default Header
