import './QuizQuestion.css'
import React, { useState } from 'react'
import { Answers, Question } from '../../interfaces/IQuestion'
import AnswerOption from '../AswerOption/AnswerOption'

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
          <AnswerOption 
            AnswerID={Answers.A}
            checked={answerSelected === Answers.A}
            optionText={currentQuestion.optionA}
            onAnswerSelected={onAnswerSelected}
          />
          <AnswerOption 
            AnswerID={Answers.B}
            checked={answerSelected === Answers.B}
            optionText={currentQuestion.optionB}
            onAnswerSelected={onAnswerSelected}
          />
          <AnswerOption 
            AnswerID={Answers.C}
            checked={answerSelected === Answers.C}
            optionText={currentQuestion.optionC}
            onAnswerSelected={onAnswerSelected}
          />
          <AnswerOption 
            AnswerID={Answers.D}
            checked={answerSelected === Answers.D}
            optionText={currentQuestion.optionD}
            onAnswerSelected={onAnswerSelected}
          />
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