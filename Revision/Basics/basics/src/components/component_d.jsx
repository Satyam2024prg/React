import '../App.css'
import React, { useContext } from 'react';
import { UserContext } from './component_a';

function ComponentD(props) {
  const user = useContext(UserContext)
  return <>
    <div className="box">
      <h1>Component D</h1>
      <p>Hello {user}</p>
    </div>
  </>
}

export default ComponentD;