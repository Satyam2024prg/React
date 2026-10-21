import React, { useState } from "react";
import '../App.css'

function Button() {

  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount(count => count - 1)
    setCount(count => count - 1)
    setCount(count => count - 1)
    console.log(count)
  }

  const reset = () => {
    setCount(0)
  }

  const increment = () => {
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
  }


  return <div className="button-count-container">
    <h1 className="count-display">{count}</h1>
    <div className="button-container">
      <button className="button" onClick={decrement}>decrement</button>
      <button className="button" onClick={reset}>Reset</button>
      <button className="button" onClick={increment}>increment</button>
    </div>
  </div>

}


export default Button;