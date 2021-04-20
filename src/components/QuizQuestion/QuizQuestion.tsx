import './QuizQuestion.css'
import React, { useState } from 'react'

const QuizQuestion = () => {
  const [, setAnswerSelected] = useState<string>("")

  const onAnswerSelected = (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setAnswerSelected(value.target.id)
  }

  return (
    <div className="quiz-container">
      <div className="question-container">
        <div className="question">
          What is the result for 1 + 1? 
        </div>
        <div className="answers">
          <div className="answer-option">
            <input type="radio" id="A" name="answer" onChange={onAnswerSelected}/>
            <label>2</label>
          </div>
          <div className="answer-option">
            <input type="radio" id="B" name="answer" onChange={onAnswerSelected}/>
            <label>1</label>
          </div>
          <div className="answer-option">
            <input type="radio" id="C" name="answer" onChange={onAnswerSelected}/>
            <label>5</label>
          </div>
          <div className="answer-option">
            <input type="radio" id="D" name="answer" onChange={onAnswerSelected}/>
            <label>7</label>
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <button className="submit-button">Submit</button>
        <button className="half-chance-button">50%</button>
      </div>
    </div>
  )
}

export default QuizQuestion