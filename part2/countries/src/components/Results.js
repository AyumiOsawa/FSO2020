import React, { useState } from 'react';
import Country from './Country';
import ResultsList from './ResultsList';


const Results = (props) => {
  const {filterWord, allResults, handleFilter} = props;
  const filteredResults = handleFilter(allResults, filterWord);
  const [ countryDisplay, setCountryDisplay ] = useState(false);

  const handleClickShow = () => {
    setCountryDisplay(!countryDisplay)
  }

  return (
    filteredResults.length > 10 ?
      (
        <div>
          'too many matches, specify another filter'
        </div>
      ) : (
        filteredResults.length === 1 ?
        (
          <Country
            result={filteredResults[0]}
            countryDisplay={countryDisplay}
          />
        ) : (
          <div>
            <p>
              results:
            </p>
            {
              filteredResults.map((result, i) => {
                return (
                  <ResultsList
                    result={result}
                    handleClickShow={handleClickShow}
                    countryDisplay={countryDisplay}
                    key={i}
                  />
                )
              })
            }
          </div>
        )
      )
  );
}

export default Results;
