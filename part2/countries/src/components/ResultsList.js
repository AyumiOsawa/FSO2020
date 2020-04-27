import React from 'react';
import Country from './Country';

const ResultsList = ({result, handleClickShow, countryDisplay}) => {

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
              <Country
                result={result}
                countryDisplay={countryDisplay}
              />
            ):(
              <></>
            )}

          </div>
  )
}

export default ResultsList;
