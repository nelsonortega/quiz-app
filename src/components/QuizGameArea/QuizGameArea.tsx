import './QuizGameArea.css'
import { useState } from 'react'
import QuizQuestion from '../QuizQuestion/QuizQuestion'
import { questionsArray } from '../../data/Questions'
import ShowComponent from '../ShowComponent/ShowComponent'

const QuizGameArea = () => {
  const [score, setScore] = useState<number>(0)
  const [quantityOfQuestionsAswered, setQuantityOfQuestionsAswered] = useState<number>(0)

  const isGameFinished = quantityOfQuestionsAswered === questionsArray.length
  
  return (
    <div className="game-area-container">
      <ShowComponent show={!isGameFinished}>
        <QuizQuestion 
          setScore={setScore}
          questions={questionsArray}
          quantityOfQuestionsAswered={quantityOfQuestionsAswered}
          setQuantityOfQuestionsAswered={setQuantityOfQuestionsAswered}
        />
      </ShowComponent>
      <ShowComponent show={isGameFinished}>
        {score}
      </ShowComponent>
    </div>
  )
}

export default QuizGameArea