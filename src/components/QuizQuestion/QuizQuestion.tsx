import './QuizQuestion.css'
import React, { useState } from 'react'
import AnswerOption from '../AswerOption/AnswerOption'
import { CheckboxOnChange } from '../../interfaces/ICheckbox'
import { Answers, Question } from '../../interfaces/IQuestion'
import ShowComponent from '../ShowComponent/ShowComponent'

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

  const [halfChanceUsed, setHalfChanceUsed] = useState(false)
  const [showOptions, setShowOptions] = useState([true, true, true, true])
  const [answerSelected, setAnswerSelected] = useState<Answers | string>(Answers.EMPTY)

  const onAnswerSelected = (value: CheckboxOnChange) => setAnswerSelected(value.target.id)

  const validateAnswer = () => {
    if (answerSelected === Answers.EMPTY) {
      alert('select one')
      return
    }
    
    if (answerSelected === currentQuestion.correctAnswer)
      setScore(prevState => prevState + 1)

    setHalfChanceUsed(false)
    setAnswerSelected(Answers.EMPTY)
    setShowOptions([true, true, true, true])
    setQuantityOfQuestionsAswered(prevState => prevState + 1)
  }

  const halfChance = () => {
    const correctAnswer = parseInt(currentQuestion.correctAnswer)

    let firstRandomNumber = Math.floor(Math.random() * 4)
    let secondRandomNumber = Math.floor(Math.random() * 4)

    if(firstRandomNumber === secondRandomNumber || firstRandomNumber === correctAnswer || secondRandomNumber === correctAnswer) {
      halfChance()
    } else {
      const tempShowOptions = showOptions

      tempShowOptions[firstRandomNumber] = false
      tempShowOptions[secondRandomNumber] = false

      setHalfChanceUsed(true)
      setAnswerSelected(Answers.EMPTY)
      setShowOptions([...tempShowOptions])
    }
  }

  return (
    <div className="quiz-container">
      <div className="question-container">
        <div className="question">
          {currentQuestion.question}
        </div>
        <div className="answers">
          <ShowComponent show={showOptions[0]}>
            <AnswerOption 
              AnswerID={Answers.A}
              checked={answerSelected === Answers.A}
              optionText={currentQuestion.optionA}
              onAnswerSelected={onAnswerSelected}
            />
          </ShowComponent>
          <ShowComponent show={showOptions[1]}>
            <AnswerOption 
              AnswerID={Answers.B}
              checked={answerSelected === Answers.B}
              optionText={currentQuestion.optionB}
              onAnswerSelected={onAnswerSelected}
            />
          </ShowComponent>
          <ShowComponent show={showOptions[2]}>
            <AnswerOption 
              AnswerID={Answers.C}
              checked={answerSelected === Answers.C}
              optionText={currentQuestion.optionC}
              onAnswerSelected={onAnswerSelected}
          />
          </ShowComponent>
          <ShowComponent show={showOptions[3]}>
            <AnswerOption 
              AnswerID={Answers.D}
              checked={answerSelected === Answers.D}
              optionText={currentQuestion.optionD}
              onAnswerSelected={onAnswerSelected}
            />
          </ShowComponent>
        </div>
      </div>
      <div className="buttons-container">
        <button className="submit-button" onClick={validateAnswer}>Submit</button>
        <button className={"half-chance-button" + (halfChanceUsed ? ' disabled' : '')} onClick={halfChance} disabled={halfChanceUsed}>50%</button>
      </div>
    </div>
  )
}

export default QuizQuestion