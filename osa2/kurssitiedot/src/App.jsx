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

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map(course => {
        const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
        
        return (
          <div key={course.id}>
            <Header name={course.name} />
            {course.parts.map(part => <Content key={part.id} part={part} />)}
            <Total total={total} />
          </div>
        )
      })}
    </div>
  )
}

const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

export default App