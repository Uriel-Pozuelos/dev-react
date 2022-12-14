import React from 'react'
import ReactDOM from 'react-dom'

const Title = ({course}) => <h1>{course}</h1>
const Content = ({parts, exercises}) => <p>{parts} {exercises}</p>
const Total = ({exercises}) => <p>Number of exercises {exercises}</p>


// const Title = (props) => {
//   return (
//     <h1> {props.course} </h1>
//   )
// }
// const Content = ({parts, exercises}) => {
//   return (
//     <p>{parts} {exercises}</p>
//   )
// }
// const Total = ({exercises}) => {
//   return (
//     <p>Number of exercises {exercises}</p>
//   )
// }
    
    
  const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}/>
      <Content parts={part1} exercises={exercises1} />
      <Content parts={part2} exercises={exercises2} />
      <Content parts={part3} exercises={exercises3} />
      <Total exercises={exercises1 + exercises2 + exercises3} />

      {/* <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
