import './Score.css'

interface IScoreProps {
  score: number
}

const Score = (props: IScoreProps) => {
  return (
    <div className="score-container">
      <div className="score-text">
        Your score is
        <span className="score-number">
          {props.score}
        </span>
      </div>
      <div className="score-button-container">
        <button className="score-button">Start Again</button>
      </div>
    </div>
  )
}

export default Score