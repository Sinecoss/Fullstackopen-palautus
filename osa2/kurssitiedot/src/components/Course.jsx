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

export default Course