import React from 'react'
import './Person.css';

const Person = ({person, handleDelete}) => {
  return (
    <form
      className="list__item"
    >
      {person.name}: {person.number}
      <button
        type="submit"
        className="btn__delete"
        onClick={event => handleDelete(event, person)}
      >
        delete
      </button>
    </form>
  )
}

export default Person;
