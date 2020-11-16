import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import numberService from '../service/numberService';

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchWord, setSearchWord ] = useState('')
  const baseUrl = 'http://localhost:3001/persons';

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
    event.preventDefault();
    if(validateInput(newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const newObj = {
        name: newName,
        number: newNumber,
      };

      numberService.post(newObj)
        .then(data => {
          setPersons(persons.concat(data));
          setNewName('');
          setNewNumber('');
        });
    }
  }

  const validateInput = input => {
    return persons.find(person => person.name === input);
  }

  const filterByName = searchWord => {
    if(searchWord === '') {
      return persons;
    } else {
      return persons.filter(person => {
        return person.name.toLowerCase().includes(searchWord.toLowerCase())
      })
    }
  }

  useEffect(() => {
    numberService.getAll()
      .then(data => {
        setPersons(data)
      });
  }, []);


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
      <ul>
      { filterByName(searchWord).map((person) =>
        <li key={`${person.name}+${person.number}`}>
          <Persons
            person={person}
          />
        </li>
        )
      }
      </ul>
    </div>
  )
}

export default App
