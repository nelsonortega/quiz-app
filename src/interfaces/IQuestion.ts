export enum Answers {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
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