import ComponentB from "./component_b";
import '../App.css'
import React, { createContext } from "react";


export const UserContext = createContext();

function ComponentA() {

  let user = "Bro"
  return <>
    <div className="box">
      <h1 >Component A</h1>
      <p>{user}</p>
      <UserContext.Provider value={user}>
        <ComponentB></ComponentB>
      </UserContext.Provider>
    </div>
  </>
}

export default ComponentA;