const Header = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

const Content = ({ part }) => {
  return (
    <div>
      <Part name={part.name} exercises={part.exercises} />
    </div>
  )
}

const Total = ({ total }) => {
  return (
    <p><b>total of {total} exercises</b></p>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Course = ({ course }) => {

  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (

    <div>
      <Header name={course.name} />
      {course.parts.map(part => <Content key={part.id} part={part} />)}
      <Total total={total} />
    </div>

  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}


export default App