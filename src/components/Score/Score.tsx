import './Score.css'
import { Dispatch, SetStateAction } from 'react'
import { HALF_CHANCE_USES } from '../QuizGameArea/QuizGameArea'

interface IScoreProps {
  score: number
  setScore: Dispatch<SetStateAction<number>>
  setHalfChanceUses: Dispatch<SetStateAction<number>>
  setQuantityOfQuestionsAswered: Dispatch<SetStateAction<number>>
}

const Score = (props: IScoreProps) => {
  const resetGame = () => {
    props.setScore(0)
    props.setQuantityOfQuestionsAswered(0)
    props.setHalfChanceUses(HALF_CHANCE_USES)
  }

  return (
    <div className="score-container">
      <div className="score-text">
        Score
        <span className="score-number">
          {props.score}
        </span>
      </div>
      <div className="score-button-container">
        <button className="score-button" onClick={resetGame}>Start Again</button>
      </div>
    </div>
  )
}

export default Score