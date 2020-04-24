import React, { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    {
      name: 'Arto Hellas',
      number: '012-345-678',
    },
    {
      name: 'Ada Lovelace',
      number: '39-44-5323523'
    },
    {
      name: 'Dan Abramov',
      number: '12-43-234345'
    },
    {
      name: 'Mary Poppendieck',
      number: '39-23-6423122'
    }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchWord, setSearchWord ] = useState('')


  const handleInputName = (event) => {
    setNewName(event.target.value)
  }


  const handleInputNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleInputSearchWord = (event) => {
    setSearchWord(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(validateInput(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const newObj = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(newObj));
      setNewName('');
      setNewNumber('');
    }
  }


  const validateInput = input => {
    return persons.find(person => person.name === input);
  }

  const filterByName = input => {
    if(input === '') {
      return persons
    } else {
      return persons.filter(person => {
        return person.name.toLowerCase().includes(input.toLowerCase())
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleInputSearchWord={handleInputSearchWord}
        searchWord={searchWord}
      />
      <h3>add a new contact</h3>
      <PersonForm
        handleInputName={handleInputName}
        newName={newName}
        handleInputNumber={handleInputNumber}
        newNumber={newNumber}
        handleSubmit={handleSubmit}
      />

      <h2>Numbers</h2>
      <Persons
        searchWord={searchWord}
        filterByName={filterByName}
      />
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
