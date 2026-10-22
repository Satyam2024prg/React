import React, { useState, useEffect } from "react";
import '../App.css'

function Timer() {

  const [timer, setTimer] = useState(new Date())
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(new Date())
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return <>
    <div className="timer-container">
      <div>
        <span className="timer-font">{timer.toLocaleTimeString()}</span>
      </div>
    </div>
  </>
}

export default Timer;