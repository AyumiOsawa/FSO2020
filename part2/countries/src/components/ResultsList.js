import React, { useState } from 'react';
import Country from './Country';

const ResultsList = ({result, single}) => {
  const [ countryDisplay, setCountryDisplay ] = useState(false);

  const handleClickShow = () => {
    setCountryDisplay(!countryDisplay)
  }

  return (
    // when there is only one result
    single
    ? (
      <Country
        result={result}
        countryDisplay={countryDisplay}
      />
    )
    : (
      // when there are multiple results
      <div>
        {result.name}
        <button
          onClick={handleClickShow}
        >
          { countryDisplay ? "Hide" : "Show" }
        </button>
        <br />
        {countryDisplay ? (
          <Country
            result={result}
            countryDisplay={countryDisplay}
          />
        ):(
          <></>
        )}
      </div>
    )
  )
}

export default ResultsList;
