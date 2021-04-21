import './AnswerOption.css'
import { Answers } from '../../interfaces/IQuestion'
import { CheckboxOnChange } from '../../interfaces/ICheckbox'

interface IAnswerOptionProps {
  AnswerID: Answers
  checked: boolean
  optionText: string
  onAnswerSelected: (value: CheckboxOnChange) => void
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