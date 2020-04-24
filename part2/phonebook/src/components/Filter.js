import React from 'react'

const Filter = (props) => {

  return (
    <form>
      filter by name: <input
                        onChange={props.handleInputSearchWord}
                        value={props.searchWord}
                      />
    </form>
  )
}

export default Filter
