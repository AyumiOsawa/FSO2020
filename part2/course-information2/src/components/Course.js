import React from 'react';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}


const Content = ({ course }) => course.parts.map(part => <Part part={part} key={part.id}/>)


const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}


const Total = ({ course }) => {
  const total = course.parts.reduce( (acc, part) => acc + part.exercises, 0)
  return(
    <p><strong>total of {total} exercises</strong></p>
  )
}


const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default Course
