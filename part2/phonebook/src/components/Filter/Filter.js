import React from 'react';
import './Filter.css';

const Filter = (props) => {

  return (
    <form className="form__filter">
      Filter by name: <input
                        onChange={props.handleInputSearchWord}
                        value={props.searchWord}
                      />
    </form>
  )
}

export default Filter
