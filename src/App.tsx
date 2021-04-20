import './App.css'
import React from 'react'
import QuizGameArea from './components/QuizGameArea/QuizGameArea'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <QuizGameArea />
    </React.Fragment>
  )
}

export default App