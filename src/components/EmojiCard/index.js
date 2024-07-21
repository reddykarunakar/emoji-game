// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, clickEmoji} = props
  const {id, emojiUrl, emojiName} = details

  const onEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li>
      <button onClick={onEmoji} type="button">
        <img src={emojiUrl} alt={emojiName} className="image" />
      </button>
    </li>
  )
}

export default EmojiCard
