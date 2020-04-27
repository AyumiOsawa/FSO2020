import React, { useState, useEffect } from 'react';
import Form from './Form';
import Results from './Results';
import axios from 'axios';

const App = () => {
  const [ filterWord, setFilterWord] = useState('');
  const [ allResults, setAllResults ] = useState([]);

  const handleInput = (event) => {
    setFilterWord(event.target.value)
  }


  const handleFilter = (countries, input) => {
    return (
      countries.filter(country => {
        return country.name.toLowerCase().includes(input.toLowerCase())
      })
    )
  }


  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setAllResults(response.data)
      })
  }, [])


  return (
    <div className="container">
      <Form
        filterWord={filterWord}
        handleInput={handleInput}
      />
      <Results
        filterWord={filterWord}
        allResults={allResults}
        handleFilter={handleFilter}
      />
    </div>
  );
}

export default App;
