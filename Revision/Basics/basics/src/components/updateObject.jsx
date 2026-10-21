import React, { useState } from "react";
import '../App.css'


function UpdateObject() {

  const [info, setInfo] = useState({ car: 'Ford', year: 2024, price: 100000 })

  const update_car_name = (e) => {
    setInfo(c => ({ ...c, car: e.target.value }))
  }

  const update_car_year = (e) => {
    setInfo(c => ({ ...c, year: e.target.value }))
  }

  const update_car_price = (e) => {
    setInfo(c => ({ ...c, price: e.target.value }))
  }



  return <>
    <div>
      <label htmlFor="input_box">Car : </label>
      <input className="input_box" onChange={update_car_name} name="input_box" type="text" placeholder="Car" />
      <br />
      <label htmlFor="input_box">Year : </label>
      <input className="input_box" onChange={update_car_year} type="number" placeholder="Year" />
      <br />
      <label htmlFor="input_box">Price : </label>
      <input className="input_box" onChange={update_car_price} type="number" placeholder="Price" />
      <br />
    </div>

    <div>
      <p>My car is {info.car} was made in {info.year} and is of {info.price}</p>
    </div>
  </>
}

export default UpdateObject;