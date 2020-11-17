import React from 'react';

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  const errorStyle  = {
    border: "green 3px solid",
    borderRadius: 5,
    backgroundColor: "#cccccc",
    fontSize: 20,
    color: "green",
    padding: "0.5rem",
    margin: "1rem",
  }

  return (
      <div style={errorStyle}>
        {message}
      </div>
  )
}

export default Notification;
