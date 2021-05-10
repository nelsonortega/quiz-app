import { Answers, Question } from "../interfaces/IQuestion"

export const questionsArray: Array<Question> = [
  {
    question: 'What is the capital of France?',
    optionA: 'Lyon',
    optionB: 'Marsella',
    optionC: 'Paris',
    optionD: 'Toulouse',
    correctAnswer: Answers.C
  },
  {
    question: 'What is the color of the letter G in the Google logo?',
    optionA: 'Yellow',
    optionB: 'Blue',
    optionC: 'Red',
    optionD: 'Green',
    correctAnswer: Answers.B
  },
  {
    question: 'Which singer was known amongst other things as "The King of Pop"?',
    optionA: 'Michael Jackson',
    optionB: 'Lady Gaga',
    optionC: 'Justin Bieber',
    optionD: 'Demi Lovato',
    correctAnswer: Answers.A
  },
  {
    question: 'What was the most downloaded app of 2020?',
    optionA: 'Youtube',
    optionB: 'Tik Tok',
    optionC: 'Facebook',
    optionD: 'Tinder',
    correctAnswer: Answers.B
  },
  {
    question: 'Which year was the Premier League founded?',
    optionA: '1992',
    optionB: '2001',
    optionC: '1985',
    optionD: '2010',
    correctAnswer: Answers.A
  },
]