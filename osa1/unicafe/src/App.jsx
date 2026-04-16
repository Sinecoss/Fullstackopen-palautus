import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {

  let total = good + neutral + bad

  return (
    <div>
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {((good * 1 + (-1) * bad) / total )}</div>
      <div>positive {((good) / total) * 100} %</div>
    </div>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {

  const feedback = 'give feedback'


  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    setGood(good + 1)
  }

  const setToNeutral = () => {
    setNeutral(neutral + 1)
  }

  const setToBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>{feedback}</h1>
      <Button onClick={setToGood} text={'good'} />
      <Button onClick={setToNeutral} text={'neutral'} />
      <Button onClick={setToBad} text={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App