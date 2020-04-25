import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([])
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


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])


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
