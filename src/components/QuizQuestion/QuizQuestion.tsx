import './QuizQuestion.css'
import React, { useState } from 'react'
import { Answers, Question } from '../../interfaces/IQuestion'

interface IQuizQuestionProps {
  questions: Array<Question>
  quantityOfQuestionsAswered: number
  setScore: React.Dispatch<React.SetStateAction<number>>
  setQuantityOfQuestionsAswered: React.Dispatch<React.SetStateAction<number>>
}

const QuizQuestion = (props: IQuizQuestionProps) => {
  const { setScore } = props
  const { questions } = props
  const { quantityOfQuestionsAswered } = props
  const { setQuantityOfQuestionsAswered } = props

  const currentQuestion = questions[quantityOfQuestionsAswered]
  const [answerSelected, setAnswerSelected] = useState<Answers | string>(Answers.EMPTY)

  const onAnswerSelected = (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setAnswerSelected(value.target.id)
  }

  const validateAnswer = () => {
    if (answerSelected === Answers.EMPTY) {
      alert('select one')
      return
    }
    
    if (answerSelected === currentQuestion.correctAnswer)
      setScore(prevState => prevState + 1)

    setAnswerSelected(Answers.EMPTY)
    setQuantityOfQuestionsAswered(prevState => prevState + 1)
  }

  return (
    <div className="quiz-container">
      <div className="question-container">
        <div className="question">
          {currentQuestion.question}
        </div>
        <div className="answers">
          <div className="answer-option">
            <input type="radio" id={Answers.A} name="answer" checked={answerSelected === Answers.A} onChange={onAnswerSelected}/>
            <label>{currentQuestion.optionA}</label>
          </div>
          <div className="answer-option">
            <input type="radio" id={Answers.B} name="answer" checked={answerSelected === Answers.B} onChange={onAnswerSelected}/>
            <label>{currentQuestion.optionB}</label>
          </div>
          <div className="answer-option">
            <input type="radio" id={Answers.C} name="answer" checked={answerSelected === Answers.C} onChange={onAnswerSelected}/>
            <label>{currentQuestion.optionC}</label>
          </div>
          <div className="answer-option">
            <input type="radio" id={Answers.D} name="answer" checked={answerSelected === Answers.D} onChange={onAnswerSelected}/>
            <label>{currentQuestion.optionD}</label>
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <button className="submit-button" onClick={validateAnswer}>Submit</button>
        <button className="half-chance-button">50%</button>
      </div>
    </div>
  )
}

export default QuizQuestion