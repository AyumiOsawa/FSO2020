import React from 'react';

const Form = (props) => {
  return (
    <form>
      find countries: <input
                        onChange={props.handleInput}
                        value={props.filterWord}
                      />
    </form>
  )
}

export default Form;
