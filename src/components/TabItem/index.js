import './index.css'

const TabItem = props => {
  const {tabList, isTap, update} = props
  const {displayText, tabId} = tabList

  const onTap = () => {
    update(tabId)
  }

  const v = isTap ? 'btn1' : ''

  return (
    <li className="list">
      <button type="button" className={`btn ${v}`} onClick={onTap}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
