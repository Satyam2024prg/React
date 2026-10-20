import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 5
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log(counter)
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    console.log(counter)
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <p>Counter value : {counter}</p>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
