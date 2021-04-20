import './QuizGameArea.css'
import { useState } from 'react'
import QuizQuestion from '../QuizQuestion/QuizQuestion'
import { questionsArray } from '../../data/Questions'

const QuizGameArea = () => {
  const [score, setScore] = useState<number>(0)
  const [quantityOfQuestionsAswered, setQuantityOfQuestionsAswered] = useState<number>(0)
  
  return (
    <div className="game-area-container">
      {quantityOfQuestionsAswered !== questionsArray.length ?
      <QuizQuestion 
        setScore={setScore}
        questions={questionsArray}
        quantityOfQuestionsAswered={quantityOfQuestionsAswered}
        setQuantityOfQuestionsAswered={setQuantityOfQuestionsAswered}
      /> : score }
    </div>
  )
}

export default QuizGameArea