import React, { useState } from 'react'

const QuizQuestion = () => {
  const [answerSelected, setAnswerSelected] = useState<string>("")

  const onAnswerSelected = (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setAnswerSelected(value.target.id)
  }

  return (
    <React.Fragment>
      <div className="question">
        What is the result for 1 + 1? 
      </div>
      <div className="answers">
        <input type="radio" id="A" name="answer" onChange={onAnswerSelected}/>
        <label>2</label>
        <input type="radio" id="B" name="answer" onChange={onAnswerSelected}/>
        <label>1</label>
        <input type="radio" id="C" name="answer" onChange={onAnswerSelected}/>
        <label>5</label>
      </div>
      <div>
        {answerSelected}
      </div>
    </React.Fragment>
  )
}

export default QuizQuestion