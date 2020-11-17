import React, { useState, useEffect } from 'react';
import Filter from '../Filter/Filter';
import PersonForm from '../PersonForm/PersonForm';
import Person from '../Person/Person';
import Notification from '../Notification/Notification';
import numberService from '../../service/numberService';

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchWord, setSearchWord ] = useState('')
  const [ message, setMessage ] = useState(null);

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
      const confirmation = window.confirm(`${newName} is already added to the phonebook. Do you want to replace the old number with a new one?`);

        if (confirmation) {
          const personToUpdate = persons.filter(person => person.name === newName)[0];
          const newObj = {
            ...personToUpdate,
            number: newNumber,
          };

          numberService.update(personToUpdate.id, newObj)
            .then(data => {
              setPersons(
                persons.map(person =>
                  person.id !== personToUpdate.id ? person : newObj
                )
              );
              setNewName('');
              setNewNumber('');
              setMessage(`Updated ${data.name}`);

              setTimeout(() => {
                setMessage(null);
              }, 3000);
            });
        }
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
          setMessage(`Added ${data.name}`);

          setTimeout(() => {
            setMessage(null);
          }, 3000);
        });
    }
  }

  const handleDelete = (event, person) => {
    event.preventDefault();
    const confirmation = window.confirm("do you want delete this contact?");

    if(confirmation) {
      numberService.remove(person.id)
      .then(() => {
        setPersons(persons.filter(n => n.id !== person.id));
      })
      .catch(() => {
        alert(`The address of ${person.name} has been already deleted`);
        setPersons(persons.filter(n => n.id !== person.id));
      })
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
      <Notification
        message={message}
      />
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
          <Person
            person={person}
            handleDelete={handleDelete}
          />
        </li>
        )
      }
      </ul>
    </div>
  )
}

export default App;
