import React from 'react'

const Persons = ({filterByName, searchWord}) => {
  return (
    <div>
      {
        filterByName(searchWord).map((person, i) => {
        return (
          <div key={i}>
            {person.name}, {person.number}
          </div>
        )})
      }
    </div>
  )
}

export default Persons
