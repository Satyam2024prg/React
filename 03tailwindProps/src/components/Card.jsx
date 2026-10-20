import React from 'react'

function Card({ userName, Profile }) {

  return (
    <>
      <div className="border-b-blue-800 rounded h-10 w-2xl">
        <h1>{userName}</h1>
        <h2>{Profile}</h2>
      </div>
    </>
  )
}

export default Card;