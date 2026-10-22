import React, { useRef } from "react";

function InputBox() {
  let inputVal = useRef(null)

  const click = () => {
    inputVal.current.focus()
    inputVal.current.style.backgroundColor = "red"
  }

  return <>
    <div>
      <button onClick={click}>Click</button>
      <input type="text" ref={inputVal} />
    </div>
  </>
}

export default InputBox;