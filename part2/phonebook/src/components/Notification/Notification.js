import React from 'react';

const Notification = ({ message }) => {
  if (message[0] === null) {
    return null;
  }

  const successStyle  = {
    border: "green 3px solid",
    color: "green",
    padding: "0.5rem",
    margin: "1rem",
    borderRadius: 5,
    backgroundColor: "#cccccc",
    fontSize: 20,
  }

  const errorStyle = {
    border: "red 3px solid",
    color: "red",
    padding: "0.5rem",
    margin: "1rem",
    borderRadius: 5,
    backgroundColor: "#cccccc",
    fontSize: 20,
  }

  return (
      <div style={
        message[1] === 'success'
        ? successStyle
        : errorStyle
      }>
        {message[0]}
      </div>
  )
}

export default Notification;
