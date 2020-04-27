import React, { useState }  from 'react';
import Country from './Country';

const ResultsList = ({result}) => {
  const [ countryDisplay, setCountryDisplay ] = useState(false);

  const handleClickShow = () => {
    setCountryDisplay(!countryDisplay)
  }

  return (
          <div>
            {result.name}
            <button
              onClick={handleClickShow}
            >
              { countryDisplay ? "Hide" : "Show" }
            </button>
            <br />
            {countryDisplay ? (
              <Country result={result} />
            ):(
              <></>
            )}

          </div>
  )
}

export default ResultsList;
