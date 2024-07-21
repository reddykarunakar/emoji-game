// Write your code here.
import './index.css'

const lostImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const wonImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imgUrl = isWon ? wonImg : lostImg
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-loss-container">
      <div className="details">
        <h1 className="heading">{gameStatus}</h1>
        <p>{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button type="button" onClick={onClickPlayAgain} className="btn">
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img src={imgUrl} alt="win or lose" className="win-loss-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
