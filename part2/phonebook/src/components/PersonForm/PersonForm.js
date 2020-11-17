import React from 'react';
import './PersonForm.css';

const PersonForm = (props) => {

  return (
    <form className="form__add">
      <div className="form__add_name form__add__item">
        name: <input
                onChange={props.handleInputName}
                value={props.newName}
              />
      </div>
      <div className="form__add_number form__add__item">
        number: <input
                  onChange={props.handleInputNumber}
                  value={props.newNumber}
                />
      </div>
      <div>
        <button
          className="btn__add"
          type="submit"
          onClick={props.handleSubmit}
        >
          add
        </button>
      </div>
    </form>
  )
}

export default PersonForm
