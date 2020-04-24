import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const handleInput = (event) => {
    setNewName(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    if(validateInput(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const newObj = {
        name: newName
      }
      setPersons(persons.concat(newObj));
      setNewName('');
    }
  }


  const validateInput = input => {
    return persons.find(person => person.name === input);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input
                  onChange={handleInput}
                  value={newName}
                />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, i) => {
          return <div key={i}>{person.name}</div>
        })}
      </div>
      <br />
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
