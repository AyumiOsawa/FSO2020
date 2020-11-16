import React from 'react'

const Persons = ({person, key}) => {
  return (
    <div key={key}>
      {person.name}: {person.number}
    </div>
  )
}

export default Persons
