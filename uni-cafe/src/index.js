import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const calcAverage = () => (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)

  const calcPositive = () => 100 * good / (good + neutral + bad)

  return (
    <>
      <h1>give feedback</h1>
      <Button text="good" clickHandler={() => setGood(good+1)} />
      <Button text="neutral" clickHandler={() => setNeutral(neutral+1)} />
      <Button text="bad" clickHandler={() => setBad(bad+1)} />
      <br />
      <h2>statistics</h2>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        calcAverage={calcAverage}
        calcPositive={calcPositive}
      />
    </>
  )
}


const Button = ({text, clickHandler}) => {
  return <button onClick={clickHandler}>{text}</button>
}


const Statistics = (props) => {
  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return "No feedback given"
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="average" value={props.calcAverage()} />
        <Statistic text="positive" value={props.calcPositive() + "%"} />
      </tbody>
    </table>
  )
}

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}: </td>
      <td>{value}</td>
    </tr>
  )
}



ReactDOM.render(<App />,
  document.getElementById('root')
)
