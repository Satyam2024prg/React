import { useState } from 'react'


function App() {
  const list = [
    {
      id: 1,
      name: "airtel",
      color: "red"
    },
    {
      id: 2,
      name: "bsnl",
      color: "blue"
    }
  ]



  const handleChange = (event) => {
    console.log(event);
  };




  return (
    <>

      <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange} />
      </div>


      {/* <div>
        {
          list.map((item) => (
            <ul key={item.id}>
              <li >{item.name}</li>
              <ul key={item.id}>
                <li>{item.color}</li>
              </ul>
            </ul>
          )
          )
        }
      </div> */}

    </>
  )
}

function Cap() {
  const list = [
    {
      id: 1,
      name: "airtel",
      color: "red"
    },
    {
      id: 2,
      name: "bsnl",
      color: "blue"
    }
  ]

  return (
    <>
      <div>
        {
          list.map((item) => (
            <ul key={item.id}>
              <li >{item.name}</li>
              <ul key={item.id}>
                <li>{item.color}</li>
              </ul>
            </ul>
          )
          )
        }
      </div>
    </>
  )
}


export { App, Cap }
