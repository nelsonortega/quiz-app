import './QuizGameArea.css'
import { useState } from 'react'
import Score from '../Score/Score'
import { questionsArray } from '../../data/Questions'
import QuizQuestion from '../QuizQuestion/QuizQuestion'
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
        <Score 
          score={score} 
          setScore={setScore}
          setQuantityOfQuestionsAswered={setQuantityOfQuestionsAswered}
        />
      </ShowComponent>
    </div>
  )
}

export default QuizGameArea