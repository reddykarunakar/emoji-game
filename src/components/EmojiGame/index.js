/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {clickedEmojiList: [], isGameInProgress: true, topScore: 0}

  resetGame = () => {
    this.setState({clickedEmojiList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = emojisList.length === clickedEmojiList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojiList.length}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojiPresent = clickedEmojiList.includes(id)
    const clickedEmojiLength = clickedEmojiList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojiLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojiList: [...previousState.clickedEmojiList, id],
      }))
    }
  }

  getShuffledEmojiList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojiList()
    return (
      <ul className="emojis-card">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            key={each.id}
            details={each}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojiList, isGameInProgress, topScore} = this.state
    return (
      <div className="bg-container">
        <NavBar
          currentScore={clickedEmojiList.length}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="container">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
