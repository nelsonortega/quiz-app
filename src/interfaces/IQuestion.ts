export enum Answers {
  A = '0',
  B = '1',
  C = '2',
  D = '3',
  EMPTY = ''
}

export interface Question {
  question: string
  optionA: string
  optionB: string
  optionC: string
  optionD: string
  correctAnswer: Answers
}