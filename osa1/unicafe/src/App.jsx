import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {

  let total = good + neutral + bad

  return (
    <div>
      <h2>statistics</h2>
      {total === 0 ? (
        <div>No feedback given</div>
      ) : (
        <>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="total" value={total} />
          <StatisticLine text="average" value={((good - bad) / total).toFixed(1)} />
          <StatisticLine text="positive" value={`${((good / total) * 100).toFixed(1)} %`} />
        </>
      )}
    </div>
  )
}


const StatisticLine = ({ text, value }) => {
  return (
    <div>{text} {value}</div>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {

  const feedback = 'give feedback'


  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>{feedback}</h1>
      <Button onClick={() => { setGood(good + 1) }} text={'good'} />
      <Button onClick={() => { setNeutral(neutral + 1) }} text={'neutral'} />
      <Button onClick={() => { setBad(bad + 1) }} text={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App