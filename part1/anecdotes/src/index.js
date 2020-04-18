import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const votes = {}
anecdotes.forEach((line, index) => {
  votes[index] = 0
})


const App = (props) => {
  const [selected, setSelected] = useState(0);

  const goToNext = () => {
    const next = Math.floor(Math.random() * anecdotes.length);
    setSelected(next);
  }

  const voteScores = Object.values(votes)
  const max = Math.max(...voteScores)
  const maxIndex = voteScores.indexOf(max);
  const addVote = () => {
    votes[selected] += 1;
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {props.anecdotes[selected]}
      </div>
      <div>
        has { votes[selected] } votes
      </div>
      <div>
        <button onClick={addVote}>vote</button>
        <button onClick={goToNext}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <div>
        {props.anecdotes[maxIndex]}
      </div>
      <div>
        has { max } votes
      </div>
    </>
  )
}




ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
