import './AnswerOption.css'
import { Answers } from '../../interfaces/IQuestion'

interface IAnswerOptionProps {
  AnswerID: Answers
  checked: boolean
  optionText: string
  onAnswerSelected: (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}

const AnswerOption = (props: IAnswerOptionProps) => {
  return (
    <div className="answer-option">
      <input 
        type="radio" 
        id={props.AnswerID} 
        name="answer" 
        checked={props.checked} 
        onChange={props.onAnswerSelected}
      />
      <label>{props.optionText}</label>
    </div>
  )
}

export default AnswerOption