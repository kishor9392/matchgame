import './index.css'

const Over = props => {
  const {score, reset} = props

  const onTap = () => {
    reset()
  }

  return (
    <div className="obg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />

      <p className="score">YOUR SCORE</p>

      <h1 className="score">{score}</h1>

      <button type="button" className="btn" onClick={onTap}>
        <div className="obg2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset"
          />
          <p className="score">PLAY AGAIN</p>
        </div>
      </button>
    </div>
  )
}

export default Over
