import ComponentC from "./component_c";
import '../App.css'

function ComponentB() {
  return <>
    <div className="box">
      <h1>Component B</h1>
      <ComponentC></ComponentC>
    </div>
  </>
}

export default ComponentB;