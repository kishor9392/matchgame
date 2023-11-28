import './index.css'

const Game = props => {
  const {list, updateRandomImage, past} = props

  const {thumbnailUrl, id} = list

  const id2 = past.id

  const click = () => {
    if (id === id2) {
      updateRandomImage('Yes')
    } else {
      updateRandomImage('No')
    }
  }

  return (
    <li className="li">
      <button type="button" className="button" onClick={click}>
        <img src={thumbnailUrl} alt="thumbnail" className="tImg" />
      </button>
    </li>
  )
}

export default Game
