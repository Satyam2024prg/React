import ComponentD from "./component_d";
import '../App.css'

function ComponentC() {
  return <>
    <div className="box">
      <h1>Component C</h1>
      <ComponentD></ComponentD>
    </div>
  </>
}

export default ComponentC;