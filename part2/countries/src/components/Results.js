import React from 'react';
import ResultsList from './ResultsList';

const Results = (props) => {
  const {filterWord, allResults, handleFilter} = props;
  const filteredResults = handleFilter(allResults, filterWord);

  return (
    filteredResults.length > 10
      ? (
        <div>
          'too many matches, specify another filter'
        </div>
      )
      : (
        <div>
          <p>
            results:
          </p>
            {
              filteredResults.map((result, i) => {
                return (
                  <ResultsList
                    result={result}
                    single={filteredResults.length === 1
                            ? true
                            : false}
                    key={i}
                  />
                )
              })
            }
          </div>
      )
  );
}

export default Results;
