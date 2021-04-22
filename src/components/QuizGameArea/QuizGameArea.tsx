import './QuizGameArea.css'
import Alert from '../Alert/Alert'
import Score from '../Score/Score'
import { useEffect, useState } from 'react'
import { questionsArray } from '../../data/Questions'
import QuizQuestion from '../QuizQuestion/QuizQuestion'
import ShowComponent from '../ShowComponent/ShowComponent'

const QuizGameArea = () => {
  const [score, setScore] = useState<number>(0)
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [quantityOfQuestionsAswered, setQuantityOfQuestionsAswered] = useState<number>(0)

  const isGameFinished = quantityOfQuestionsAswered === questionsArray.length
  
  useEffect(() => {
    let alertTimeout: NodeJS.Timeout

    if (showAlert === true) {
      alertTimeout = setTimeout(() => {
        setShowAlert(false)
      }, 3000);
    }

    return () => {
      clearTimeout(alertTimeout)
    }
  }, [showAlert])
  
  return (
    <div className="game-area-container">
      <ShowComponent show={showAlert}>
        <Alert />
      </ShowComponent>
      <ShowComponent show={!isGameFinished}>
        <QuizQuestion 
          setScore={setScore}
          questions={questionsArray}
          setShowAlert={setShowAlert}
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