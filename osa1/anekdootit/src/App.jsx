import { useState } from 'react'

const Display = ({ text, vote, header}) => {
  return (
    <div>
      <h1>{header}</h1>
      <> {text} has {vote} votes</>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState([0,0,0,0,0,0,0,0])

  const nextNumber = () => {
    return setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voting = () => {
    const copy = [...votes]
    copy[selected] += 1
    return setVote(copy)
  }


  return (
    <div>
      <Display text={anecdotes[selected]} vote={votes[selected]} header='Anecdote of the day'/>
      <Button onClick={voting} text='vote' />
      <Button onClick={nextNumber} text='next anecdote' />
      <Display text={anecdotes[votes.indexOf(Math.max(...votes))]} vote={Math.max(...votes)} header='Anecdote with most votes'/>
    </div>
  )
}

export default App