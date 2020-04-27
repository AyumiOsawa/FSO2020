import React from 'react';
import Weather from './Weather';

const Country = ({result}) => {
  return (
    <div>
      <h2>{result.name}</h2>
      <div>
        capital: {result.capital} <br/>
        population: {result.population}
      </div>
      <h3>Languages</h3>
      <ul>
        {
          result.languages.map((language, j) => {
            return <li key={j}>{language.name}</li>
          })
        }
      </ul>
      <div>
        <img
          src={result.flag}
          alt="national flag"
          className="flag"
        />
      </div>
      <Weather
        result={result}
      />
    </div>
  )
}

export default Country;
