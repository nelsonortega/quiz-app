import './Score.css'

interface IScoreProps {
  score: number
  setScore: Function
  setQuantityOfQuestionsAswered: Function
}

const Score = (props: IScoreProps) => {
  const resetGame = () => {
    props.setScore(0)
    props.setQuantityOfQuestionsAswered(0)
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