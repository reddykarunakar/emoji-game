// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, clickEmoji} = props
  const {id, emojiUrl, emojiName} = details

  const onEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li onClick={onEmoji}>
      <img src={emojiUrl} alt={emojiName} className="image" />
    </li>
  )
}

export default EmojiCard
