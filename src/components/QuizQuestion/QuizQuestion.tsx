import './QuizQuestion.css'
import AnswerOption from '../AswerOption/AnswerOption'
import ShowComponent from '../ShowComponent/ShowComponent'
import { Dispatch, SetStateAction, useState } from 'react'
import { CheckboxOnChange } from '../../interfaces/ICheckbox'
import { Answers, Question } from '../../interfaces/IQuestion'

interface IQuizQuestionProps {
  questions: Array<Question>
  quantityOfQuestionsAswered: number
  setScore: Dispatch<SetStateAction<number>>
  setShowAlert: Dispatch<SetStateAction<boolean>>
  setQuantityOfQuestionsAswered: Dispatch<SetStateAction<number>>
}

const NUMBER_OF_OPTIONS = 4

const QuizQuestion = (props: IQuizQuestionProps) => {
  const { setScore } = props
  const { questions } = props
  const { setShowAlert } = props
  const { quantityOfQuestionsAswered } = props
  const { setQuantityOfQuestionsAswered } = props

  const currentQuestion: Question = questions[quantityOfQuestionsAswered]

  const [halfChanceUsed, setHalfChanceUsed] = useState<boolean>(false)
  const [answerSelected, setAnswerSelected] = useState<Answers | string>(Answers.EMPTY)
  const [showOptions, setShowOptions] = useState<Array<boolean>>([true, true, true, true])

  const onAnswerSelected = (value: CheckboxOnChange) => setAnswerSelected(value.target.id)

  const validateAnswer = () => {
    if (answerSelected === Answers.EMPTY) {
      setShowAlert(true)
      return
    }
    
    if (answerSelected === currentQuestion.correctAnswer)
      setScore(prevState => prevState + 1)

    setShowAlert(false)
    setHalfChanceUsed(false)
    setAnswerSelected(Answers.EMPTY)
    setShowOptions([true, true, true, true])
    setQuantityOfQuestionsAswered(prevState => prevState + 1)
  }

  const halfChance = () => {
    const correctAnswer: number = parseInt(currentQuestion.correctAnswer)

    let firstRandomNumber: number = Math.floor(Math.random() * NUMBER_OF_OPTIONS)
    let secondRandomNumber: number = Math.floor(Math.random() * NUMBER_OF_OPTIONS)

    if(firstRandomNumber === secondRandomNumber || firstRandomNumber === correctAnswer || secondRandomNumber === correctAnswer) {
      halfChance()
    } else {
      const tempShowOptions: Array<boolean> = showOptions

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